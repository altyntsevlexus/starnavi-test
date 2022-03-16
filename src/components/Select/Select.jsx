import styled from './Select.module.css';

const Select = ({ modes, handleSetSelectedMode }) => {
  return (
    <select name="mode" id="mode" onChange={handleSetSelectedMode} defaultValue={0} className={styled.select}>
      <option value={0}>-</option>
      {modes.map((mode) => {
        return (
          <option value={mode.field} key={mode.field}>
            {mode.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
