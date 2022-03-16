import { useEffect, useState } from 'react';
import ListItem from '../ListItem';
import Row from '../Row';
import styled from './Game.module.css';

const Game = ({ game }) => {
  const [activeCells, setActiveCells] = useState([]);

  const handleActiveCells = (cell) => {
    const exist = activeCells.find((i) => {
      return i.rowIndex === cell.rowIndex && i.columnIndex === cell.columnIndex;
    });

    setActiveCells((prevState) => {
      if (exist) {
        return prevState.filter((i) => {
          return i.rowIndex !== cell.rowIndex || i.columnIndex !== cell.columnIndex;
        });
      } else {
        return [...prevState, cell];
      }
    });
  };

  useEffect(() => {
    setActiveCells([]);
  }, [game]);

  return (
    <div className={styled.game} style={{ maxHeight: game.length * 50 + 'px' }}>
      <div>
        {game.map((row, i) => {
          return <Row cells={row} index={i} key={i} handleActiveCells={handleActiveCells} activeCells={activeCells} />;
        })}
      </div>
      <div>
        <p className={styled.title}>Hover Squares</p>
        <ul className={styled.list}>
          {activeCells.map((cell) => (
            <ListItem
              key={`${cell.rowIndex}${cell.columnIndex}`}
              rowIndex={cell.rowIndex}
              columnIndex={cell.columnIndex}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
