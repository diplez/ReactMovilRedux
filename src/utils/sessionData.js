import { AsyncStorage } from 'react-native';

let getSessionData = async ()=>{
  try {
    const data = await AsyncStorage.getItem('sesionData') || null;
    return JSON.parse(data)
  } catch (error) {        
    console.log(error.message);
  }
  return ''
}

export {getSessionData}