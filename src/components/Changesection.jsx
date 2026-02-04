export default function Changesection({
  toogleChange,
  taskChange,
  setTaskChange,
  ID,
  changeTask,
  theme,
}) {
  return (
    <div className={`changesContainer ${theme ? "dark" : ""}`}>
      <h3>Change Task</h3>
      <div>
        <input
          type="text"
          placeholder="Change task here.."
          value={taskChange}
          onChange={(event) => setTaskChange(event.target.value)}
        />
        <div>
          <button onClick={() => changeTask(ID, taskChange)}>Confirm</button>
          <button onClick={() => toogleChange(null)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
