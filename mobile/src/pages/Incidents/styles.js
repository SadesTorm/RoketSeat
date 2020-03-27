import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: '#737380',

    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 30,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 16,       
        marginBottom: 15,
        lineHeight: 24, 
        color: '#737380',
    
    },
    incidentsList:{
        marginTop: 1,
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentOng: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold', 
    },
    incidentValue: {
        marginTop:  8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    }

});