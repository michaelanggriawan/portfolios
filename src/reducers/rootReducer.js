import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import formReducer from './formReducer';

const rootReducer = combineReducers({
    form: formReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;