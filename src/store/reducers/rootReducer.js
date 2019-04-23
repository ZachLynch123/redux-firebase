import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { compbineReducers, combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});




export default rootReducer;



