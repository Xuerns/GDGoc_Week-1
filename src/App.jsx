import { useState } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import Profile from "./components/Profile";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([
    { id: Date.now(), text: "Example task", done: false },
  ]);
  const [isChange, setIsChange] = useState(null);
  const [taskChange, setTaskChange] = useState("");

  const addTask = (newTask) => {
    if (task.trim() === "") return;
    setList((item) => [
      ...item,
      { id: Date.now(), text: newTask, done: false },
    ]);
    setTask("");
  };

  const deleteTask = (id) => {
    setList((items) => items.filter((item) => item.id !== id));
    console.log(list);
  };

  const toggleTask = (id) => {
    setList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  const changeTask = (id, newChange) => {
    if (newChange.trim() === "") return;

    setList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, text: newChange } : item,
      ),
    );
    setTaskChange("");
    setIsChange(null);
  };

  const toogleChange = (id) => {
    if (isChange === id) {
      setIsChange(null);
    } else {
      setIsChange(id);
    }
  };

  return (
    <div className="mainContainer">
      <Profile />
      <ListContainer
        list={list}
        addTask={addTask}
        task={task}
        setTask={setTask}
        deleteTask={deleteTask}
        toggletask={toggleTask}
        toogleChange={toogleChange}
        isChange={isChange}
        taskChange={taskChange}
        setTaskChange={setTaskChange}
        changeTask={changeTask}
      />
    </div>
  );
}

export default App;
