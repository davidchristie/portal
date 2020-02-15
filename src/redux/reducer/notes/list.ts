import { Reducer } from "redux";
import { ActionType } from "../../actions";
import { CREATE_NOTE_SUCCESS, DELETE_NOTE_REQUEST } from "../../actions/notes";

interface Note {
  id: string;
  title: string;
}

type NotesState = Note[];

const initialState: NotesState = [];

const listReducer: Reducer<NotesState, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE_NOTE_SUCCESS:
      return [action.payload, ...state];

    case DELETE_NOTE_REQUEST:
      return state.filter(note => note.id !== action.payload.id);

    default:
      return state;
  }
};

export default listReducer;
