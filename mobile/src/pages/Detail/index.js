import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import imagemLogo from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){

    const navigation = useNavigation();
    const menssagem = 'Olá Apae enstou entrando em contato para fazer uma doação no caso da "caso" com valor de "valor"'

    function navigateHome(){
        navigation.goBack();
    }

    function sendWhatsApp(){
        Linking.openURL(`WhatsApp://send?phone=556192761664&text=${menssagem}`);

    }
    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Animal do caso',
            recipients: ['xxpaulinho.xx@live.com'],
            body: menssagem,
        })

    }
    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imagemLogo}/>

                <TouchableOpacity onPress={navigateHome}>
                    <Feather name="arrow-left" size={25} color="#E02041"/>

                </TouchableOpacity>
            </View>
                <View style={styles.incident}>
                        <Text style={styles.incidentOng}>ONG: </Text>
                        <Text style={styles.incidentValue}>APAE</Text>
                   
                        <Text style={styles.incidentOng}>CASO: </Text>
                        <Text style={styles.incidentValue}>cachorro atropelado</Text>
                   
                        <Text style={styles.incidentOng}>VALOR: </Text>
                        <Text style={styles.incidentValue}>R$200,00</Text>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitulo}>Salve o dia!</Text>
                    <Text style={styles.heroTitulo}>Seja o Heroi deste caso.</Text>
                    <Text style={styles.heroDescription}>Entre em contato: </Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                            
                            <Text style={styles.actionText}>WhatsApp</Text>
                        
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendEmail}>
                            
                            <Text style={styles.actionText}>Email</Text>
                        
                        </TouchableOpacity>


                        
                    </View>
                </View>
        </View>
    );
}