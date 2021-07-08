import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import List from '@material-ui/core/List';

const ItemList = ({ items, editItem, newValue, newItemValue, onClickDone, onClickDelete, setNewValue }) => (
  <List className={styles.list} >
    {items.map(item =>
     <div className={styles.item} key={item.value}>
            <Item 
            value={item.value} 
            isDone={item.isDone}
            id={item.id} 
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
             isEditing = { item.isEditing }
            setNewValue = { setNewValue }
            editItem = { editItem }
             newValue = { newValue }
              newItemValue = { newItemValue }
             />
            
       </div>
         )}
  </List>
);

ItemList.defaultProps = {
  items: [{
    value: 'нет задачи',
    isDone: false
  }]
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;