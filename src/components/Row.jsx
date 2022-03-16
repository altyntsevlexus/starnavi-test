import Cell from './Cell';

const Row = ({ cells, index, handleActiveCells, activeCells }) => {
  return (
    <div style={{ display: 'flex' }}>
      {cells.map((cell) =>
        activeCells.find((i) => {
          return i.rowIndex === index && i.columnIndex === cell;
        }) ? (
          <Cell key={cell} rowIndex={index} columnIndex={cell} handleActiveCells={handleActiveCells} active={true} />
        ) : (
          <Cell key={cell} rowIndex={index} columnIndex={cell} handleActiveCells={handleActiveCells} />
        )
      )}
    </div>
  );
};

export default Row;
