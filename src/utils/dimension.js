import { Dimensions } from 'react-native';
import React, { Component } from 'react';

var {height, width} = Dimensions.get('window')

var HEIGHT,WIDTH;

if( width < height ){
	//PORTRAIR
	HEIGHT = height;
	WIDTH = width;
}else{
	//LANDSCAPE
	HEIGHT = width;
	WIDTH = height;
}

export {
	HEIGHT,
	WIDTH
}
