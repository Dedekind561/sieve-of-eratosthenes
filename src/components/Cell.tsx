import { memo } from "react";
import "../App.css";
import "./Cell.css";

type CellProps = {
  value: number;
  isMarked: boolean;
  isPrime: boolean;
  markAsPrime: (n: number) => void;
  crossOutMultiples: (multiple: number) => void;
};

function Cell({ value, markAsPrime, isPrime, isMarked, crossOutMultiples }: CellProps) {
  console.log(`Busy rendering Cell with value: ${value}`);

  // goal: trigger a re-render only when the props have updated or changed...
  function handleClick(value: number) {
    markAsPrime(value);
    crossOutMultiples(value);
  }

  return (
    <button className={`cell ${isPrime ? "prime" : ""}  ${isMarked ? "marked" : ""}`} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
}

export default memo(Cell);
// memo takes a component as an input
// and memo returns a new "memoized" component
