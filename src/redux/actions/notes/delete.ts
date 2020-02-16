import { ActionType } from "..";

export interface DeleteNoteErrorAction {
  payload: Error;
  type: typeof DELETE_NOTE_ERROR;
}

export interface DeleteNoteRequestAction {
  payload: {
    id: string;
  };
  type: typeof DELETE_NOTE_REQUEST;
}

export interface DeleteNoteSuccessAction {
  payload: {
    id: string;
  };
  type: typeof DELETE_NOTE_SUCCESS;
}

export const DELETE_NOTE_ERROR = "DELETE_NOTE_ERROR";
export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";

export const deleteNoteError = (error: Error): ActionType => ({
  payload: error,
  type: DELETE_NOTE_ERROR
});

export const deleteNoteRequest = (id: string): ActionType => ({
  payload: {
    id
  },
  type: DELETE_NOTE_REQUEST
});

export const deleteNoteSuccess = (id: string): ActionType => ({
  payload: {
    id
  },
  type: DELETE_NOTE_SUCCESS
});
