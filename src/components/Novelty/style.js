import { StyleSheet } from 'react-native';

export default StyleSheet.create({    
    containerView:{
        flex: 1,
        flexDirection:'column'
    },
    container: {                
        flex:1,
        flexDirection: 'row',
        backgroundColor: "white",        
        borderWidth: 1
    },
    box_left: {
        flex: .2,       
        backgroundColor: "white", 
        borderLeftWidth: 10,        
        alignItems: 'center',
        padding: 5
    },
    box_right:{
        flex: .8,       
        backgroundColor: "white",
        padding: 5
    },
    textLeft:{
        fontWeight: '900'
    },
    TextHeaderRight:{
        fontSize: 15,
        fontWeight: '900'
    },
    TextHeaderLeft:{        
        fontWeight: '900'
    }
})