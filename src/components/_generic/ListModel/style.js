import { StyleSheet } from 'react-native';

export default StyleSheet.create({    
    container: {        
        flexDirection: 'column',
    },    
    flatList_loading:{
        height:200
    },
    flatList_success:{
        flex: 1
    },
    emptyData:{
        padding: '15%',
        textAlign: 'center',
    }    
})