import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Game from './components/Game';

const App = () => {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState(0);
  const [game, setGame] = useState([]);

  const handleStartGame = () => {
    const newGame = Array.from(Array(selectedMode).keys()).map(() => Array.from(Array(selectedMode).keys()));
    setGame(newGame);
  };

  const handleSetSelectedMode = (e) => {
    setSelectedMode(+e.target.value);
  };

  useEffect(() => {
    fetch('http://demo7919674.mockable.io')
      .then((response) => response.json())
      .then((data) => setModes(data));
  }, []);

  return (
    <>
      <Nav modes={modes} handleSetSelectedMode={handleSetSelectedMode} handleStartGame={handleStartGame} />
      {game.length > 0 && <Game game={game} />}
    </>
  );
};

export default App;
