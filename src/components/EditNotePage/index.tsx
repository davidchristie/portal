import { EditorState } from "draft-js";
import React from "react";
import Heading from "../Heading";
import Navigation from "../Navigation";
import TextArea from "../TextArea";
import TextField from "../TextField";

const EditNotePage = () => {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState(EditorState.createEmpty());
  return (
    <Navigation>
      <Heading>Edit Note</Heading>
      <TextField id="title" label="Title" onChange={setTitle} value={title} />
      <TextArea onChange={setText} value={text} />
    </Navigation>
  );
};

export default EditNotePage;
