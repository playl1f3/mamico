import React, { PropTypes } from 'react';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import * as auth0 from '../services/auth0';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import {
  List,
  ListItem,
  SideMenu
} from 'react-native-elements';

const AppView = React.createClass({
  propTypes: {
    isReady: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  },

  componentWillReceiveProps({isReady, isLoggedIn}) {
    if (!this.props.isReady) {
      if (isReady && !isLoggedIn) {
        auth0.showLogin();
      }
    }
  },

  render() {
    const src = require('../../assets/nidec_logo.png');

    const list = [
      {
        name: 'Home',
        icon: 'home'
      },
      {
        name: 'Call Support',
        icon: 'call'
      },
      {
        name: 'Email Support',
        icon: 'email'
      },
      {
        name: 'Terms and Condition',
        icon: 'assignment'
      }
    ];

    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 30}}>
        <View style={{backgroundColor: 'darkgrey', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
          <Image
            source={src}
            style={styles.logo} />
        </View>
        <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l, i) => (
              <ListItem
                roundAvatar
                onPress={() => console.log('something')}
                key={i}
                title={l.name}
                leftIcon={{name: l.icon}}
              />
            ))
          }
        </List>
      </View>
    );



    if (!this.props.isReady) {
      return (
        <View>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <SideMenu
        isOpen={true}
        menu={MenuComponent}>
        <View style={{flex: 1}}>
          <NavigationViewContainer />
          {__DEV__ && <DeveloperMenu />}
        </View>
       </SideMenu>
    );
  }
});

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 84
  },
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
