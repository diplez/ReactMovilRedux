import { StyleSheet } from 'react-native';
import {COLOR_PRIMARY} from './../../styles/globalStyles'

export default StyleSheet.create({    
    box: {
        flex: 1
    },
    heading: {
        flex: 0.2,
        backgroundColor: COLOR_PRIMARY,
        justifyContent: 'center',
        alignItems:'center',        
        flexDirection: 'row',
        padding:10
    },
    heading_left:{
        flex: 0.5,
        justifyContent:'center',
        alignItems:'center',        
    },
    heading_rigth:{
        flex: 0.5,
        backgroundColor: COLOR_PRIMARY,
    },
    body: {
        flex: 0.8,    
        borderColor: 'white',
    },
})
