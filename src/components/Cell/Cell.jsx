import styled from './Cell.module.css';

const Cell = ({ rowIndex, columnIndex, handleActiveCells, active }) => {
  const handleMouseEnter = () => {
    handleActiveCells({ rowIndex, columnIndex });
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={active ? `${styled.cell} ${styled['cell--s--active']}` : styled.cell}
    ></div>
  );
};

export default Cell;
