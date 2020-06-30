import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styleInputPassword from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default class HeaderLeftButton extends React.Component {

    constructor(props) {
        super(props)
    }

    onNavigation(){        
        this.props.navigation.openDrawer();
    }

    render() {
        
        return (
            <View>
            <TouchableOpacity
                title=''
                onPress={() => this.onNavigation()}>
                <Text>{"  "}
                    <Icon name="navicon" color="#5d438f" size={30} />
                </Text>
            </TouchableOpacity>
            </View>
        );
    }

}