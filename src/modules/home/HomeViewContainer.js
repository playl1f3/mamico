import {connect} from 'react-redux';
import HomeView from './HomeView';

export default connect(
  state => ({
    office: state.getIn(['home', 'value']),
    loading: state.getIn(['home', 'loading'])
  })
)(HomeView);
