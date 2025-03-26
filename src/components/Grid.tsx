import Cell from "./Cell";
import "../App.css";
import { useCallback, useState } from "react";

type GridObj = {
  value: number;
  isMarked: boolean;
  isPrime: boolean;
};

function setupGridNumbers() {
  return Array.from({ length: 100 }, (_, index) => {
    return { value: index + 1, isMarked: false, isPrime: false };
  });
}

export default function Grid() {
  const [numbers, setNumbers] = useState<GridObj[]>(setupGridNumbers);

  function markAsPrime(number: number) {
    // update state so that the number is marked as isPrime: true
    // find the value that matches the number and update that one
    setNumbers((prevNumbers) => {
      return prevNumbers.map((obj) => {
        return obj.value === number ? { ...obj, isPrime: true } : { ...obj };
      });
    });
  }

  function crossOutMultiples(multiple: number) {
    let currentMultiple = multiple;
    // save current multiple
    setInterval(function () {
      currentMultiple += multiple;
      // increment current multiple by multiple
      setNumbers((prevNumbers) => {
        // update numbers state
        return prevNumbers.map((obj) => {
          return obj.value === currentMultiple ? { ...obj, isMarked: true } : { ...obj };
        });
      });
    }, 1000);
  }

  const markAsPrimeCached = useCallback(markAsPrime, []);
  // create a function ref that persists across renders so Cell props aren't updating needlessly
  const crossOutMultiplesCached = useCallback(crossOutMultiples, []);

  return (
    <>
      <div className="main-grid">
        {numbers.map((num) => {
          return <Cell crossOutMultiples={crossOutMultiplesCached} markAsPrime={markAsPrimeCached} {...num} />;
        })}
      </div>
    </>
  );
}
