import React from 'react';
import { Image,
         FlatList,
         StyleSheet,
         Text, 
         View ,
         ScrollView,RefreshControl} from 'react-native';
import styleListModel from "./style";

export default class ListModel extends React.Component {

    constructor(props) {
    	super(props)      
    }
    
    
    shouldComponentUpdate (nextProps, nextState) {    
      /**if (this.props.data.data === nextProps.data.data) {        
        return false; 
      } **/
      return true;
    }

    listEmpty(loading,message){
      return (        
        <View style={styleListModel.container}>
          <Text style={styleListModel.emptyData}>{loading?'':message}</Text>
        </View>
      )
    }

    refreshData(){
      this.props.refreshData();      
    }

    render() {     
        var data = this.props;  
        return (
        	<View>
            <FlatList
              contentContainerStyle={
                data.loading
                  ?[styleListModel.flatList_loading]
                  :[styleListModel.flatList_success]
              }
              data={data.data}
              renderItem={({item})=>(
                data.renderItem(item)
              )}
              ListEmptyComponent={this.listEmpty(data.loading,data.messageEmpty)}
              keyExtractor={item=>data.keyExtractor(item)}
              refreshControl={
               <RefreshControl
                onRefresh={() => {this.refreshData()}}
                refreshing={data.loading}                
               />                
              }
            />                
        	</View>
        )
    }
}