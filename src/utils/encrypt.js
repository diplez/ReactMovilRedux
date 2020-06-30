import md5 from "react-native-md5";

function encryptMD5(value){
	return md5.hex_md5(value);
}

export {encryptMD5}
