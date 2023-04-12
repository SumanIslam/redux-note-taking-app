import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from './notesActionTypes';
import { Note } from '../../types/types'

// add note action creator
export const addNoteAction = (note: Note) => {
	return {
		type: ADD_NOTE,
		payload: note,
	};
};


// delete note action creator
export const deleteNoteAction = (id: number) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  }
}

// fetch notes action creator
export const fetchNotesAction = () => {
  return {
    type: FETCH_NOTES,
  }
}