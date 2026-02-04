import { FaSearch } from "react-icons/fa";

export default function ListEmpty() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        gap: "0.5rem",
      }}
    >
      <FaSearch style={{ width: "30px", height: "30px", fill: "gray" }} />
      <p style={{ textAlign: "center", color: "gray" }}>The List is Empty</p>
    </div>
  );
}
