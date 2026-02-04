import List from "./List";
import Changesection from "./Changesection";
import ListEmpty from "./ListEmpty";
import { useState } from "react";

export default function ListContainer({
  list,
  addTask,
  deleteTask,
  toggletask,
  changeTask,
  toogleChange,
  taskChange,
  setTaskChange,
  isChange,
  theme,
  inputRef,
}) {
  const [filter, setFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);

  const counter = list.reduce(
    (acc, item) => ({
      done: acc.done + (item.done ? 1 : 0),
      remaining: acc.remaining + (item.done ? 0 : 1),
      total: acc.total + 1,
    }),
    { done: 0, remaining: 0, total: 0 },
  );

  const filteredList = list.filter((item) => {
    if (filter === "all") return true;
    if (filter === "done") return item.done;
    if (filter === "remaining") return !item.done;
  });

  return (
    <div className={`listContainer ${theme ? "darkContainer" : ""}`}>
      <div className="container">
        <h3>Todo List</h3>
        <h6>
          {counter.done} / {counter.total}
        </h6>
      </div>
      <div className="containerInput">
        <input
          type="text"
          className={`inputBar ${theme ? "darkInput" : ""}`}
          ref={inputRef}
          placeholder="Add task here.."
        />
        <div className="filterContainer">
          <button
            className="btn filterBtn"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            Filter
          </button>

          {showFilter && (
            <div className={`filterDropdown ${theme ? "darkDropdown" : ""}`}>
              <button
                onClick={() => {
                  setFilter("all");
                  setShowFilter(false);
                }}
              >
                All
              </button>
              <button
                onClick={() => {
                  setFilter("done");
                  setShowFilter(false);
                }}
              >
                Done
              </button>
              <button
                onClick={() => {
                  setFilter("remaining");
                  setShowFilter(false);
                }}
              >
                Remaining
              </button>
            </div>
          )}
        </div>

        <button className="btn submitBtn" onClick={() => addTask()}>
          Add
        </button>
      </div>
      {list.length === 0 ? (
        <ListEmpty />
      ) : (
        <ul>
          {filteredList.map((item) => (
            <div key={item.id}>
              <List
                item={item}
                deleteTask={deleteTask}
                toggleTask={toggletask}
                toogleChange={toogleChange}
                theme={theme}
              />
              {isChange === item.id ? (
                <Changesection
                  toogleChange={toogleChange}
                  taskChange={taskChange}
                  setTaskChange={setTaskChange}
                  ID={item.id}
                  changeTask={changeTask}
                  theme={theme}
                />
              ) : null}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
