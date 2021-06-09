import React from 'react';
import Item from '../Item/Item'
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const ItemList = ({ items }) =>(<div>
  <List>
    {items.map(item => (
      <ListItem key={item.value} className={styles.item} dense button>
        <ListItemIcon>
           <Checkbox
        defaultChecked
        color="primary"
        value="checkedG"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
        </ListItemIcon>
        <ListItemText><Item value={item.value} isDone={item.isDone} /></ListItemText>
        <ListItemSecondaryAction className={styles.delete}>
          <IconButton aria-label="очистить">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
</div>);


export default ItemList;