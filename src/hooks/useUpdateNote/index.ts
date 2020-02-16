import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NOTES_PATH } from "../../components/Routes";
import {
  updateNoteRequest,
  updateNoteSuccess
} from "../../redux/actions/notes";
import { Note } from "../../types";

const useUpdateNote = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (note: Note) => {
    dispatch(updateNoteRequest(note));
    dispatch(updateNoteSuccess(note));
    history.push(NOTES_PATH);
  };
};

export default useUpdateNote;
