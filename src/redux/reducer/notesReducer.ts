import { Note, ReduxAction } from '../../types/types';
import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from '../action/notesActionTypes';

// initial state
const initialState: { notes: Note[] } = {
	notes: [],
};

// note reducer
const notesReducer = (state = initialState, action: ReduxAction) => {
	switch (action.type) {
		case ADD_NOTE:
			const newNote: Note = {
				id: Math.random(),
				title: action.payload.title,
				content: action.payload.content,
			};
			
			const updatedNotes: Note[] = [...state.notes, newNote];
			localStorage.setItem('notes', JSON.stringify(updatedNotes));
			return {
				...state,
				notes: updatedNotes,
			};
		case FETCH_NOTES:
			const storedNotes = localStorage.getItem('notes');
			const parsedNotes: Note[] = storedNotes ? JSON.parse(storedNotes) : [];
			return {
				...state,
				notes: parsedNotes,
			};
		case DELETE_NOTE:
			const filteredNotes = state.notes.filter(
				(note) => note.id !== action.payload
			);
			localStorage.setItem('notes', JSON.stringify(filteredNotes));
			return {
				...state,
				notes: filteredNotes,
			};
		default:
			return state;
	}
};

export default notesReducer;
