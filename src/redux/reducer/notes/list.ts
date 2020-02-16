import { Reducer } from "redux";
import { Note } from "../../../types";
import { ActionType } from "../../actions";
import {
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
  UPDATE_NOTE_SUCCESS
} from "../../actions/notes";

type NotesState = Note[];

const initialState: NotesState = [];

const listReducer: Reducer<NotesState, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE_NOTE_SUCCESS:
      return [action.payload, ...state];

    case DELETE_NOTE_SUCCESS:
      return state.filter(note => note.id !== action.payload.id);

    case UPDATE_NOTE_SUCCESS:
      return state.map(note =>
        note.id === action.payload.id ? action.payload : note
      );

    default:
      return state;
  }
};

export default listReducer;
