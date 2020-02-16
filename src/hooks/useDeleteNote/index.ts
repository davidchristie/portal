import { useDispatch } from "react-redux";
import {
  deleteNoteRequest,
  deleteNoteSuccess
} from "../../redux/actions/notes";

const useDeleteNote = () => {
  const dispatch = useDispatch();
  return async (id: string) => {
    dispatch(deleteNoteRequest(id));
    dispatch(deleteNoteSuccess(id));
  };
};

export default useDeleteNote;
