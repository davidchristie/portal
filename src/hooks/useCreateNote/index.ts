import { EditorState } from "draft-js";
import { useDispatch } from "react-redux";
import {
  createNoteRequest,
  createNoteSuccess
} from "../../redux/actions/notes";

const useCreateNote = () => {
  const dispatch = useDispatch();
  return async () => {
    dispatch(createNoteRequest("Untitled"));
    const id = String(Math.random());
    dispatch(
      createNoteSuccess({
        id,
        text: EditorState.createEmpty(),
        title: "Untitled"
      })
    );
  };
};

export default useCreateNote;
