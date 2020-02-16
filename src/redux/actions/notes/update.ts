import { Note } from "../../../types";
import { ActionType } from "..";

export interface UpdateNoteErrorAction {
  payload: Error;
  type: typeof UPDATE_NOTE_ERROR;
}

export interface UpdateNoteRequestAction {
  payload: Note;
  type: typeof UPDATE_NOTE_REQUEST;
}

export interface UpdateNoteSuccessAction {
  payload: Note;
  type: typeof UPDATE_NOTE_SUCCESS;
}

export const UPDATE_NOTE_ERROR = "UPDATE_NOTE_ERROR";
export const UPDATE_NOTE_REQUEST = "UPDATE_NOTE_REQUEST";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";

export const updateNoteError = (error: Error): ActionType => ({
  payload: error,
  type: UPDATE_NOTE_ERROR
});

export const updateNoteRequest = (note: Note): ActionType => ({
  payload: note,
  type: UPDATE_NOTE_REQUEST
});

export const updateNoteSuccess = (note: Note): ActionType => ({
  payload: note,
  type: UPDATE_NOTE_SUCCESS
});
