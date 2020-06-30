import { StyleSheet } from 'react-native';
import {COLOR_PRIMARY} from './../../styles/globalStyles'

export default StyleSheet.create({    
    containerView: {
        flex: 1,            
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width:150,
        height:150,
    },
    textbody: {        
        textAlign:'center'
    },
    textFooter: {
        fontSize: 10
    },
    containerSocialIcons:{
        flexDirection: 'row',
    }
})
