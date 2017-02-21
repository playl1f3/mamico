import {connect} from 'react-redux';
import DevicesView from './DevicesView';

export default connect(
  state => ({
    office: state.getIn(['devices', 'value']),
    loading: state.getIn(['devices', 'loading'])
  })
)(DevicesView);
