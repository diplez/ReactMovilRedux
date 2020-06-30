import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,          
         BackHandler,Button,
        ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ButtonGroup} from 'react-native-elements';
import { genericAction } from './../../actions/genericAction';
import Activities from './../../components/Activities/Activities'
import {URL_ACTIVITIES} from './../../constants/app'
import styleActivities from "./style";

class ActivitiesView extends React.Component {

    constructor(props) {
    	super(props)   
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)     
        this.refreshData = this.refreshData.bind(this)     
    }    

    componentDidMount() {      
      this.props.genericAction(URL_ACTIVITIES,'');
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);        
    }    

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }

    refreshData(){
      this.props.genericAction(URL_ACTIVITIES,'')
    }

    handleBackButton = () => {               
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            }, ], {
                cancelable: false
            }
         )
     return true;
   }

    render() {        
        const buttons = ['Hoy', 'Mañana', 'Posteriores']
        const { selectedIndex } = this.state
        return (
        	<View style={[styleActivities.container]}>            
            <ButtonGroup                  
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}                                  
            />          
            <Activities                   
              activitiesStore={this.props.activitiesStore}
              refreshData={this.refreshData}
            />
            {/**<Button
             title="Go to Jane's profile"
             onPress={() => this.props.navigation.navigate('line',{ name: 'Diego Lopez' })}
            />**/}
        	</View>
        )
    }
}

function mapStateToProps(state) {    
    return {        
      activitiesStore : {
          data: state.activitiesStore.data,
          error: state.activitiesStore.error,
          loading: state.activitiesStore.loading,
      }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({genericAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesView);

