import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toIntro, toHome } from '../actions/navigationActions';

import Nav from '../components/Nav';

const mapStateToProps = (state) => ({
  navigation: state.navigation,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    toIntro,
    toHome,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);