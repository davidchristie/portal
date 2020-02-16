import { useSelector } from "react-redux";
import { notesSelector } from "../../redux/selectors/notes";

const useNotes = () => {
  return useSelector(notesSelector);
};

export default useNotes;
