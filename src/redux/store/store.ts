import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import NotesReducer from '../reducer/notesReducer';

const store = createStore(NotesReducer, composeWithDevTools());

export default store;
