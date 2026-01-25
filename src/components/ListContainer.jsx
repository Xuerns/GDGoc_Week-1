import List from "./List";
import Changesection from "./Changesection";

export default function ListContainer({
  list,
  addTask,
  task,
  setTask,
  deleteTask,
  toggletask,
  toogleChange,
  isChange,
  taskChange,
  setTaskChange,
  changeTask,
}) {
  return (
    <div className="listContainer">
      <h3>Todo List</h3>
      <div className="containerInput">
        <input
          type="text"
          className="inputBar"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Add task here.."
        />
        <button className="submitBtn" onClick={() => addTask(task)}>
          Add
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <div key={item.id}>
            <List
              item={item}
              deleteTask={deleteTask}
              toggleTask={toggletask}
              toogleChange={toogleChange}
            />
            {isChange === item.id ? (
              <Changesection
                toogleChange={toogleChange}
                taskChange={taskChange}
                setTaskChange={setTaskChange}
                ID={item.id}
                changeTask={changeTask}
              />
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
}
