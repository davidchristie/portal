import { EditorState } from "draft-js";

export interface Note {
  id: string;
  text: EditorState;
  title: string;
}
