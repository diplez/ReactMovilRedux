import { StyleSheet } from 'react-native';
 
/**
*  Colores base de la aplicación
**/
const COLOR_PRIMARY = '#ED7D00';
const COLOR_SECUNDARY_1 = '#CFE800';
const COLOR_SECUNDARY_2 = '#81009C';
const COLOR_COMPLEMENTY = '#006895';


/**
*  Estilos globales a ser usados
**/
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
      },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',        
      },
    image_circle:{
        borderRadius:100,            
        alignItems: 'center',    
        overflow: 'hidden',
        borderColor: "#FBE6FF",    
        borderWidth: 1,
      },
});

export {COLOR_PRIMARY}
