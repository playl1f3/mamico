import React, {PropTypes} from 'react';
import { Icon, List, ListItem, Card, Button} from 'react-native-elements';
import * as NavigationState from '../../modules/navigation/NavigationState';
import {
  Text,
  View,
  TouchableHighlight,
  Modal
} from 'react-native';

const HomeView = React.createClass({
  getInitialState() {
    return {
      modalVisible: true
    };
  },
  addDevices() {
    //this.props.dispatch(CityState.selectOffice(office));
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Devices',
      title: 'Add devices'
    }));
  },

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  render() {
    const list = [
      {
        name: 'Press 45',
        subtitle: 'Speed: 0 SPM',
        icon: 'local-laundry-service',
        color: ''
      },
      {
        name: 'Press 88',
        subtitle: 'Speed: 45 SPM',
        icon: 'local-laundry-service',
        color: 'red'
      },
      {
        name: 'Press 100',
        subtitle: 'Speed: 130 SPM',
        icon: 'local-laundry-service',
        color: 'green'
      }
    ];

    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={{marginTop: 22}}>
            <Card
              title='Terms and Condition'>
              <Text style={{marginBottom: 10}}>
                Agree to some terms and condition here.
              </Text>
              <Button
                icon={{name: 'check'}}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Agree'
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} />
            </Card>
          </View>
        </Modal>

        <View style={{alignItems: 'flex-end'}}>
          <Icon
            name='add-circle-outline'
            size={25}
            type='material-icon'
            onPress={() => this.addDevices()}
          />
        </View>

        <List containerStyle={{marginBottom: 20, marginTop: 2}}>
          {
            list.map((l, i) => (
              <ListItem
                title={l.name}
                key={i}
                subtitle={l.subtitle}
                hideChevron
                leftIcon={{name: l.icon, color: l.color}}
              />
            ))
          }
        </List>
      </View>
    );
  }

});

export default HomeView;
