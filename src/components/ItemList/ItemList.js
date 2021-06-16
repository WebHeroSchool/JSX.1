import React from 'react';
import Item from '../Item/Item'
import styles from './ItemList.module.css';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';


const ItemList = ({ items,onClickDone, id, onClickDelete }) =>(
  <List className={styles.list} >
    {items.map(item => <div className={styles.item} key={item.value}>
            <Item 
            value={item.value} 
            isDone={item.isDone}
            id={item.id} 
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
             />
            
       </div>
         )}
  </List>
);

    ItemList.propTypes = {
      items: PropTypes.array.isRequired,
      onClickDone: PropTypes.func.isRequired,
  };


export default ItemList;