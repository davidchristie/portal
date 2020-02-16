import { EditorState } from "draft-js";
import React from "react";
import { useParams } from "react-router-dom";
import useNote from "../../hooks/useNote";
import useUpdateNote from "../../hooks/useUpdateNote";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Navigation from "../Navigation";
import NotFoundPage from "../NotFoundPage";
import TextArea from "../TextArea";
import TextField from "../TextField";

const EditNotePage = () => {
  const { id } = useParams<{ id: string }>();
  const { note } = useNote(id);
  const updateNote = useUpdateNote();
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState(EditorState.createEmpty());
  React.useEffect(() => {
    if (note) {
      setTitle(note.title);
      setText(note.text);
    }
  }, [note]);
  if (!note) {
    return <NotFoundPage />;
  }
  const save = () => {
    updateNote({
      id,
      text,
      title
    });
  };
  return (
    <Navigation>
      <Container>
        <Heading>
          Edit Note
          <Button onClick={save}>Save</Button>
        </Heading>
        <TextField id="title" label="Title" onChange={setTitle} value={title} />
        <hr />
        <TextArea onChange={setText} value={text} />
        <hr />
      </Container>
    </Navigation>
  );
};

export default EditNotePage;
