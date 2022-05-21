type TGrid = Array<Array<number>>;

// function to create grid
const createGrid = (columns: number, rows: number): TGrid => {
  const grid = [...Array(columns)];
  return grid.map((_, i) => (grid[i] = [...Array(rows)]));
};

// function to fill with 0 and 1 every square of our grid
const fillGrid = (columns: number, rows: number): TGrid => {
  const grid = createGrid(columns, rows).map((x) =>
    x.map((y) => (y = Math.round(Math.random())))
  );
  return grid;
};

const getLiveGrid = (): TGrid => {
  const grid = fillGrid(20, 20);
  const nextGrid = [...grid];
  grid.map((r, i) =>
    r.map((c, j) => {
      //if statement to avoid crash on corner/edge
      if (i === 0 || j === 0 || i === 20 - 1 || j === 20 - 1) {
        nextGrid[i][j] = grid[i][j];
      } else {
        let neighbors = countNeighbors(grid, i, j);
        let currentPosition = grid[i][j];
        // below rules condition to switch cell's state
        if (currentPosition === 0 && neighbors === 3) {
          nextGrid[i][j] = 1;
        } else if (currentPosition === 1 && (neighbors < 2 || neighbors > 3)) {
          nextGrid[i][j] = 0;
        } else {
          nextGrid[i][j] = grid[i][j];
        }
      }
    })
  );
  return nextGrid;
};

// function to count live cells
const countNeighbors = (
  grid: TGrid,
  indexRow: number,
  indexCol: number
): number => {
  let initialState = 0;
  initialState = -grid[indexRow][indexCol];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      initialState += grid[indexRow + i][indexCol + j];
    }
  }
  return initialState;
};

export { getLiveGrid, countNeighbors };
