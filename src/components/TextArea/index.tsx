import React from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface Props {
  onChange: (value: EditorState) => void;
  value: EditorState;
}

const TextArea: React.FunctionComponent<Props> = ({ onChange, value }) => {
  return <Editor editorState={value} onEditorStateChange={onChange} />;
};

export default TextArea;
