import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import styleMenuItem from "./style"
import { SHOW_PASSWORD, HIDE_PASSWORD } from './../../../constants/images'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ItemMenuDrawer extends React.Component {    

  constructor(props) {
     super(props)
  }
  
   render() {     
    const value = this.props;
      return (
        <TouchableOpacity style={styleMenuItem.navSectionStyle} onPress={value.action}>
          <Text style={value.itemActive===value.itemValue?styleMenuItem.navItemActive:styleMenuItem.navItemStyle}>
            <Icon name={value.icon} color={value.colorIcon} size={value.sizeIcon} />{"    "}{value.itemName}
          </Text>
        </TouchableOpacity>
      )
   }
}
