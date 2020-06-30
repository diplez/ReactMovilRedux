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
    },
    body: {
        flex: 0.8,        
        backgroundColor: COLOR_PRIMARY,        
        borderColor: 'white',
    },
})
