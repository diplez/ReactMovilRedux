import React from 'react';
import { StyleSheet,
         Text, 
         View,          
         Alert,          
         BackHandler,Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSessionData }  from './../../utils/sessionData';
import {ButtonGroup} from 'react-native-elements';
import { genericAction} from './../../actions/genericAction';
import Novelty from './../../components/Novelty/Novelty'
import {URL_ACTIVITIES} from './../../constants/app'
import styleNovelty from "./style";

class NoveltyView extends React.Component {

    constructor(props) {
    	super(props)   
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)     
    }

    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);                
        this.props.genericAction(URL_ACTIVITIES,'');
    }    

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    refreshData(){
      this.props.genericAction(URL_ACTIVITIES,'');
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
        const buttons = ['Otras', 'Convocatorias']
        const { selectedIndex } = this.state
        return (
        	<View style={[styleNovelty.container]}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}                  
            />
            <Novelty
              activitiesStore={this.props.activitiesStore}
              refreshData={this.refreshData}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(NoveltyView);