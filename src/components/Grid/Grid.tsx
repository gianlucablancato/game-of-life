import { useEffect, useState } from "react";
import { EButton } from "../../helper/constants";
import { getLiveGrid, TGrid } from "../../helper/functions";
import { Button } from "antd";
import "./style.css";

const Grid = () => {
  const [grid, setGrid] = useState<TGrid>(getLiveGrid());
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        setGrid(getLiveGrid());
      }, 300);
    } else return;
  }, [grid, isStarted]);

  const renderGrid = () => {
    return grid.map((r, i) =>
      r.map((_, j) => (
        <div
          className={grid[i][j] === 1 ? "gridLiveCell" : "gridDeadCell"}
          key={`${i}-${j}`}
        ></div>
      ))
    );
  };

  return (
    <>
      <h1>Game of Life</h1>
      <div className="mainContainer">
        <div
          style={{ display: "grid", gridTemplateColumns: `repeat(40,1rem)` }}
        >
          {renderGrid()}
        </div>
      </div>
      <Button
        type="primary"
        danger={isStarted}
        onClick={() => setIsStarted(!isStarted)}
      >
        {isStarted ? EButton.STOP : EButton.START}
      </Button>
    </>
  );
};

export default Grid;
