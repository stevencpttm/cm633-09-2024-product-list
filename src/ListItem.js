import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ListItem(props) {
  const themeData = useContext(ThemeContext);

  const onClickHandler = () => {
    props.onChange(props.name);
  };

  return (
    <li
      onClick={onClickHandler}
      className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
        props.active ? "bg-slate-800 text-white" : "bg-white"
      }`}
    >
      {props.name} ({themeData.theme})
    </li>
  );
}

export default ListItem;
