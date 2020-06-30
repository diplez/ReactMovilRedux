import { StyleSheet } from 'react-native';

export default StyleSheet.create({    
    container: {        
        flexDirection: 'row',
        backgroundColor: "white",
        marginTop: 5,   
        marginBottom: 5,
        borderRadius: 8,
        height: 40,
    },
    box_input: {
        flex: .9,       
        borderRadius: 8,
        height:40
    },
    box_image: {
        flex: .1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 8,
    },
    input:{
        marginTop: 0,
        marginBottom: 0,        
    },
    text:{
        color:'red'
    },
    input_login: {
        marginTop: 5,
        marginBottom: 5,        
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,        
        height:40
    },
})