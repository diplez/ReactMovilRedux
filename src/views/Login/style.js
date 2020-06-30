import { StyleSheet } from 'react-native';
import {COLOR_PRIMARY} from './../../styles/globalStyles'

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
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
    },
    image:{        
        width: '50%',
        height: '50%'
    },
    textApp:{
        color: 'white',
        fontSize:30,
        fontWeight:'900'
    },
    textCopyright:{
        textAlign: 'center',
        backgroundColor: '#5d438f',
        fontWeight:'400',
        fontSize:12,
        color: 'white',
    }
})
