import React, {PropTypes} from 'react';
import {Icon, List, ListItem, Card, Button} from 'react-native-elements';
import * as NavigationState from '../../modules/navigation/NavigationState';
import {getDevices} from '../../services/deviceService';
import {
  Text,
  View,
  TouchableHighlight,
  Modal
} from 'react-native';

const HomeView = React.createClass({
  getInitialState() {
    const devices = getDevices();
    return {
      modalVisible: true,
      devices: devices
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
            this.state.devices.data.map((device, i) => (
              <ListItem
                title={device.name}
                key={i}
                subtitle={'Speed: ' + device.rpm + ' SPM'}
                hideChevron
                leftIcon={{name: 'local-laundry-service', color: device.color}}
              />
            ))
          }
        </List>

      </View>
    );
  }

});

export default HomeView;
