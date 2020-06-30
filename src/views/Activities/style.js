import { StyleSheet } from 'react-native';
import {COLOR_PRIMARY} from './../../styles/globalStyles'

export default StyleSheet.create({    
    container: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 2,
        backgroundColor: COLOR_PRIMARY,
    },    
    box: {
        flex: 1
    },
    box1: {
        flex: 0.5,
        backgroundColor: COLOR_PRIMARY,
        justifyContent: 'center',
        alignItems:'center',        
    },
    box2: {
        flex: 0.5,
        padding: 20,        
        backgroundColor: COLOR_PRIMARY,        
        borderColor: 'white',
    }
})
