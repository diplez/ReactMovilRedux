import React from 'react';
import { Image,
         FlatList,
         StyleSheet,
         Text, 
         View ,
         ScrollView,RefreshControl} from 'react-native';
import styleActivities from "./style";
import ListModel from './../_generic/ListModel/ListModel'

export default class Activities extends React.Component {

    constructor(props) {
    	super(props) 
      this.renderItem = this.renderItem.bind(this)
      this.itemKey = this.itemKey.bind(this)
    }    

    renderItem(item){
      return(
        <View style={styleActivities.container}>
          <View style={styleActivities.box_left}>
          <Text>
              sdss
          </Text>
          </View>
          <View style={styleActivities.box_right}>
          <Text>
              {item.id}
          </Text>
          <Text>
              {item.name}
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
        	<View style={styleActivities.containerView}>
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