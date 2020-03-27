import React from 'react';
/* TouchableOpacity -> torna qualquer coisa clicavel e reduz a opacidade*/
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import imagemLogo from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    const  navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imagemLogo}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.titulo}>Bem Vido!</Text>
            <Text style={styles.descricao}>escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data = {[1,2,3]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentOng}>ONG: </Text>
                        <Text style={styles.incidentValue}>APAE</Text>
                   
                        <Text style={styles.incidentOng}>CASO: </Text>
                        <Text style={styles.incidentValue}>cachorro atropelado</Text>
                   
                        <Text style={styles.incidentOng}>VALOR: </Text>
                        <Text style={styles.incidentValue}>R$200,00</Text>

                        <TouchableOpacity 
                            style={styles.detailButton}
                            onPress={navigateToDetail}
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