import React from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.css";

interface Props {
  onChange: (value: EditorState) => void;
  value: EditorState;
}

const TextArea: React.FunctionComponent<Props> = ({ onChange, value }) => {
  return (
    <Editor
      editorClassName="TextArea-editor"
      editorState={value}
      onEditorStateChange={onChange}
      wrapperClassName="TextArea"
    />
  );
};

export default TextArea;
