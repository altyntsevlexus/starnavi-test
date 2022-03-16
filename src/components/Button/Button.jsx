import styled from './Button.module.css';

const Button = ({ handleStartGame }) => {
  return (
    <button type="button" onClick={handleStartGame} className={styled.button}>
      Start
    </button>
  );
};

export default Button;
