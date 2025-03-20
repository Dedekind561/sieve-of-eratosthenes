import { memo } from "react";
import "./Cell.css";

type CellProps = {
  crossOutMultiples: Function;
  value: number;
  isMarked: boolean;
};

function Cell({ value, isMarked, crossOutMultiples }: CellProps) {
  console.log(`Busy rendering Cell with value: ${value}`);

  return (
    <button
      className={isMarked ? "marked" : ""}
      onClick={() => {
        console.log({ value }, "Cell.tsx level");
        crossOutMultiples(value);
      }}
    >
      {value}
    </button>
  );
}

export default memo(Cell);
