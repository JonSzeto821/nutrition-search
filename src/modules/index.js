import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import reducer from '../reducers/formReducer';

export default combineReducers({
  router: routerReducer,
  reducer,
  form: formReducer
});
