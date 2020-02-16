import React from "react";
import useCreateNote from "../../hooks/useCreateNote";
import useDeleteNote from "../../hooks/useDeleteNote";
import useNotes from "../../hooks/useNotes";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import List from "../List";
import ListItem from "../ListItem";
import Link from "../Link";
import Navigation from "../Navigation";
import { getEditNotePath } from "../Routes";

const NotesPage = () => {
  const createNote = useCreateNote();
  const deleteNote = useDeleteNote();
  const notes = useNotes();
  return (
    <Navigation>
      <Container>
        <Heading>
          Notes <Button onClick={createNote}>Create</Button>
        </Heading>
        <List>
          {notes.list.map(note => (
            <ListItem key={note.id}>
              <Link to={getEditNotePath(note.id)}>{note.title}</Link>
              <div>
                <Button onClick={() => deleteNote(note.id)}>Delete</Button>
              </div>
            </ListItem>
          ))}
        </List>
      </Container>
    </Navigation>
  );
};

export default NotesPage;
