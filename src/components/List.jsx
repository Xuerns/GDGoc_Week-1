import Delete from "../assets/delete.svg";
import edit from "../assets/edit.svg";

export default function List({ item, deleteTask, toggleTask, toogleChange }) {
  return (
    <li
      style={
        item.done === true
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
      }
    >
      <p onClick={() => toggleTask(item.id)}>{item.text}</p>
      <div className="changeContainer">
        <button className="thisBtn" onClick={() => toogleChange(item.id)}>
          <img src={edit} className="thisIcon" />
        </button>
        <button onClick={() => deleteTask(item.id)} className="thisBtn">
          <img src={Delete} className="thisIcon" />
        </button>
      </div>
    </li>
  );
}
