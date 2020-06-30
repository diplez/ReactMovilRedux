import { StyleSheet } from 'react-native';

export default StyleSheet.create({    
    container: {                
        flex:1,
        flexDirection: 'row',
        backgroundColor: "white",        
        borderWidth: 2
    },
    box_left: {
        flex: .2,       
        backgroundColor: "red", 
    },
    box_right: {
        flex: .8,
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        backgroundColor: "white", 
        padding: 10,
    },
    flatList_loading:{
        height:200
    },
    flatList_success:{
        flex: 1
    },
    containerView:{
        flex: 1,
        flexDirection:'column'
    }
})