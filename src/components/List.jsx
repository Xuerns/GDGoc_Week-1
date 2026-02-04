import Delete from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import { MdModeEdit, MdDelete } from "react-icons/md";
export default function List({
  item,
  deleteTask,
  toggleTask,
  toogleChange,
  theme,
}) {
  return (
    <li
      style={
        theme === false
          ? item.done === true
            ? {
                backgroundColor: "rgba(215, 215, 215, 1)",
                boxShadow: "none",
                borderLeft: "0.3rem solid rgba(80, 162, 250, 1)",
              }
            : {
                backgroundColor: "white",
                boxShadow: "0 2px 0.3rem 0.1rem rgb(215, 215, 215)",
                borderLeft: "0.3rem solid rgb(116, 183, 255)",
              }
          : item.done === true
            ? {
                backgroundColor: "rgba(19, 19, 19, 1)",
                borderLeft: "0.3rem solid rgba(80, 162, 250, 1)",
                color: "white",
              }
            : {
                backgroundColor: "rgba(28, 28, 28, 1)",
                borderLeft: "0.3rem solid rgb(116, 183, 255)",
                color: "white",
              }
      }
    >
      <p onClick={() => toggleTask(item.id)}>{item.text}</p>
      <div className="changeContainer">
        <button className="thisBtn" onClick={() => toogleChange(item.id)}>
          <MdModeEdit
            src={edit}
            className={`btn thisIcon ${theme ? "darkIcon" : ""}`}
          />
        </button>
        <button onClick={() => deleteTask(item.id)} className="thisBtn">
          <MdDelete
            src={Delete}
            className={`btn thisIcon ${theme ? "darkIcon" : ""}`}
          />
        </button>
      </div>
    </li>
  );
}
