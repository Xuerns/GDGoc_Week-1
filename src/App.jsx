import { useState, useRef, useEffect } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import Profile from "./components/Profile";

function App() {
  const [list, setList] = useState([
    { id: Date.now(), text: "Example task", done: false },
  ]);
  const [theme, setTheme] = useState(false);
  const [isChange, setIsChange] = useState(null);
  const [taskChange, setTaskChange] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTask = () => {
    const task = inputRef.current.value;
    if (task.trim() === "") return;
    setList((prev) => [...prev, { id: Date.now(), text: task, done: false }]);
    inputRef.current.value = null;
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
    <div className={`mainContainer ${theme ? "dark" : ""}`}>
      <Profile theme={theme} setTheme={setTheme} />
      <ListContainer
        list={list}
        addTask={addTask}
        deleteTask={deleteTask}
        toggletask={toggleTask}
        changeTask={changeTask}
        toogleChange={toogleChange}
        taskChange={taskChange}
        setTaskChange={setTaskChange}
        isChange={isChange}
        theme={theme}
        inputRef={inputRef}
      />
    </div>
  );
}

export default App;
