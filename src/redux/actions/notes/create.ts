import { ActionType } from "..";

export interface CreateNoteErrorAction {
  payload: Error;
  type: typeof CREATE_NOTE_ERROR;
}

export interface CreateNoteRequestAction {
  payload: {
    title: string;
  };
  type: typeof CREATE_NOTE_REQUEST;
}

export interface CreateNoteSuccessAction {
  payload: {
    id: string;
    title: string;
  };
  type: typeof CREATE_NOTE_SUCCESS;
}

export const CREATE_NOTE_ERROR = "CREATE_NOTE_ERROR";
export const CREATE_NOTE_REQUEST = "CREATE_NOTE_REQUEST";
export const CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS";

export const createNoteError = (error: Error): ActionType => ({
  payload: error,
  type: CREATE_NOTE_ERROR
});

export const createNoteRequest = (title: string): ActionType => ({
  payload: {
    title
  },
  type: CREATE_NOTE_REQUEST
});

export const createNoteSuccess = (id: string, title: string): ActionType => ({
  payload: {
    id,
    title
  },
  type: CREATE_NOTE_SUCCESS
});
