type TGrid = Array<Array<number>>;

// function to create grid
const createGrid = (columns: number, rows: number): TGrid => {
  const grid = [...Array(columns)];
  return grid.map((_, i) => (grid[i] = [...Array(rows)]));
};

// function to fill with 0 and 1 every square of our grid
const getGrid = (columns: number, rows: number): TGrid => {
  const grid = createGrid(columns, rows).map((x) =>
    x.map((y) => (y = Math.round(Math.random())))
  );
  return grid;
};

export { getGrid };
