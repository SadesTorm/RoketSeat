import React, {useState, useEffect} from 'react';
/* TouchableOpacity -> torna qualquer coisa clicavel e reduz a opacidade*/
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import imagemLogo from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    const [incidentes, setIncidentes] = useState([]);
    const [total, setIncidentsTotal] = useState(0);
    const [page, setPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const  navigation = useNavigation();
   

    async function carregaIncidents(){
        if(loading){
            return;
        }
        if(total > 0 && incidentes.length == total){
            return;
        }

        setLoading(true);
        

        const response = await api.get('incidents', {params:{page}});

        setIncidentes([...incidentes, ...response.data]);
        setIncidentes(response.data);
        setIncidentsTotal(response.headers['x-total-count-pages']);
        setLoading(false);
        setPages(page + 1);
        
    }

    function navigateToDetail(incident){
        navigation.navigate('Detail',{ incident });
                
    }

    useEffect(()=>{
        carregaIncidents();

    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imagemLogo}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.titulo}>Bem Vido!</Text>
            <Text style={styles.descricao}>escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data = {incidentes}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident.id)}
                onEndReached={carregaIncidents}
                onEndReachedThreshold={0.3}
                showsVerticalScrollIndicator={false}
                renderItem={({item: incident}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentOng}>ONG: </Text>
                        <Text style={styles.incidentValue}>{incident.nome} de {incident.cidade}-{incident.uf}</Text>
                   
                        <Text style={styles.incidentOng}>CASO: </Text>
                        <Text style={styles.incidentValue}>{incident.titulo}</Text>
                   
                        <Text style={styles.incidentOng}>VALOR: </Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.valor)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailButton}
                            onPress={() => navigateToDetail(incident)}
                        >  

                            <Text style={styles.detailButtonText}>Mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />

                        </TouchableOpacity> 
                    </View>

                )}            
            />

        </View>
    );
}