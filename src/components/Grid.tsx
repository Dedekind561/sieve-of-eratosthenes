import Cell from "./Cell";
import "../App.css";

export default function Grid() {
  return (
    <>
      <div className="main-grid">
        <Cell value={1} isMarked={false} />
      </div>
    </>
  );
}
