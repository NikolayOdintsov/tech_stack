import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//keys here - define names of app state keys
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
