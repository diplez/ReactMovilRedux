import React from 'react';
import { Image,
         FlatList,
         StyleSheet,
         Text, 
         View ,
         ScrollView,RefreshControl} from 'react-native';
import styleNovelty from "./style";
import ListModel from './../_generic/ListModel/ListModel'
import { colorRandom } from './../../utils/extras';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Novelty extends React.Component {

    constructor(props) {
    	super(props) 
      this.renderItem = this.renderItem.bind(this)
      this.itemKey = this.itemKey.bind(this)
    }    

    renderItem(item){
      return(
        <View style={styleNovelty.container}>
          <View style={[styleNovelty.box_left,{borderLeftColor: colorRandom()}]}>
          <Text style={styleNovelty.textLeft}>
              10:00
          </Text>
          <Text style={styleNovelty.textLeft}>
              17-OCT
          </Text>
          </View>
          <View style={styleNovelty.box_right}>
            <Text style={styleNovelty.TextHeaderRight}>
                {item.name}
            </Text>
            <Text>
              <Icon name="book"                 
                size={12} />
                {'  '+item.email}
            </Text>
            <Text>
              <Icon name="user-o"                 
                size={12} />
                {'  '+item.email}
            </Text>
            <Text style={styleNovelty.TextHeaderLeft}>
                {item.email}
            </Text>
          </View>                 
        </View>
      )
    }

    itemKey(item){
      return item.email;
    }

    render() {     
        var data = this.props.activitiesStore;  
        return (
        	<View style={styleNovelty.containerView}>
            <ListModel 
              refreshData={this.props.refreshData}
              loading={data.loading}
              data={data.data} 
              renderItem={this.renderItem}
              messageEmpty='La lista no contiene elementos'
              keyExtractor={this.itemKey}
            />
        	</View>
        )
    }
}