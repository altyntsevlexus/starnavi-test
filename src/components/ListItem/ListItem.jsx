import styled from './ListItem.module.css';

const ListItem = ({ rowIndex, columnIndex }) => {
  return (
    <li className={styled['list-item']}>
      row {rowIndex + 1} {''}
      col {columnIndex + 1}
    </li>
  );
};

export default ListItem;
