import { useCallback, useState } from "react";
import Cell from "./Cell";
import { setupGrid } from "../utils";

export default function Grid({ gridSize }: { gridSize: number }) {
  const [numbers, setNumbers] = useState(() => setupGrid(gridSize));

  function crossOutMultiples(multiple: number) {
    let currentMultiple = multiple;
    setNumbers((prevNums) =>
      prevNums.map((obj) => {
        return obj.value === currentMultiple ? { ...obj, isMarked: true } : { ...obj };
      })
    );

    const intervalId = setInterval(() => {
      currentMultiple += multiple;
      if (currentMultiple > 100) clearInterval(intervalId);

      setNumbers((prevNums) =>
        prevNums.map((obj) => {
          return obj.value === currentMultiple ? { ...obj, isMarked: true } : { ...obj };
        })
      );
    }, 1000);
  }
  const crossOutMultiplesMemoised = useCallback(crossOutMultiples, []);

  return (
    <>
      <ul>
        {numbers.map((obj) => {
          return <Cell key={obj.value} isMarked={obj?.isMarked} crossOutMultiples={crossOutMultiplesMemoised} value={obj.value} />;
        })}
      </ul>
    </>
  );
}
