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
        marginBottom: 16,
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
        marginBottom: 16,
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
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    heroTitulo:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    action:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }

    
});