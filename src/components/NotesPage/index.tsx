import React from "react";
import useCreateNote from "../../hooks/useCreateNote";
import useDeleteNote from "../../hooks/useDeleteNote";
import useNotes from "../../hooks/useNotes";
import Button from "../Button";
import Heading from "../Heading";
import List from "../List";
import ListItem from "../ListItem";
import Navigation from "../Navigation";

const NotesPage = () => {
  const createNote = useCreateNote();
  const deleteNote = useDeleteNote();
  const notes = useNotes();
  return (
    <Navigation>
      <Heading>Notes</Heading>
      <Button onClick={createNote}>Create</Button>
      <List>
        {notes.list.map(note => (
          <ListItem key={note.id}>
            {note.title}{" "}
            <div>
              <Button onClick={() => deleteNote(note.id)}>Delete</Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Navigation>
  );
};

export default NotesPage;
