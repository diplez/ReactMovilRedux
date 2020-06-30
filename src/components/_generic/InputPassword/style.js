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
    },
    input:{
        marginTop: 0,
        marginBottom: 0,        
    },
    text:{
        color:'red'
    }
})