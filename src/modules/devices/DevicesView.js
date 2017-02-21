import React from 'react';
import {View} from 'react-native';
import {FormLabel,FormInput,Button} from 'react-native-elements';


const DevicesView = React.createClass({

  render() {
    return (
    <View>
      <FormLabel>Device Name</FormLabel>
      <FormInput placeholder='Please enter name of device'/>
      <FormLabel>IP Address</FormLabel>
      <FormInput placeholder='Please enter ip address of device'/>
      <Button
        raised
        icon={{name: 'done'}}
        buttonStyle={{margin: 30}}
        title='SUBMIT' />
    </View>
    );
  }
});

export default DevicesView;
