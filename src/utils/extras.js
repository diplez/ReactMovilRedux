import React from 'react';
import {Linking} from 'react-native';

/**
*	METODO ABRIR URL 
*   params: url => URL de sitio we
**/
function openURLWeb(url){
	Linking.canOpenURL(url).then(supported => {
	  if (supported) {
	    Linking.openURL(url);
	  } else {
	    console.log(error + url);
	  }
	});
};


/**
*  GENERA COLOR ALEATORIO
*
**/
function colorRandom(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export {openURLWeb,colorRandom}
