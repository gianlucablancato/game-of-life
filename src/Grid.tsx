import { useEffect, useState } from "react";

import { getLiveGrid } from "./helper/functions";

const Grid = () => {
  const [grid, setGrid] = useState(getLiveGrid());

  useEffect(() => {
    setTimeout(() => {
      setGrid(getLiveGrid());
    }, 2000);
  }, [grid]);

  const renderGrid = () => {
    return grid.map((r, i) =>
      r.map((_, j) => (
        <div
          key={`${i}-${j}`}
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: grid[i][j] === 1 ? "red" : "white",
            border: "1px solid black",
          }}
        ></div>
      ))
    );
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: `repeat(20,2rem)` }}
        >
          {renderGrid()}
        </div>
      </div>
    </>
  );
};

export default Grid;
