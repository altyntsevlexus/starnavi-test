import Button from '../Button';
import Select from '../Select';
import styled from './Nav.module.css';

const Nav = ({ modes, handleSetSelectedMode, handleStartGame }) => {
  return (
    <div className={styled.nav}>
      <Select modes={modes} handleSetSelectedMode={handleSetSelectedMode} />
      <Button handleStartGame={handleStartGame} />
    </div>
  );
};

export default Nav;
