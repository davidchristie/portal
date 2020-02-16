import { Note } from "../../types";
import useNotes from "../useNotes";

const useNote = (id: string) => {
  const { list } = useNotes();
  const note: Note | null = list.find(note => note.id === id) || null;
  return {
    note
  };
};

export default useNote;
