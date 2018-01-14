import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
import App from '../components/App.js';

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNews }, dispatch);
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;