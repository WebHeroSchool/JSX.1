import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const Item = ({ value, isDone, onClickDone, id, onClickDelete}) => (<ListItem className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
	})
}>
         <Checkbox
        defaultChecked
        color="primary"
        value="checkedG"
        onClick={() => onClickDone(id)}
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
	  <ListItemText > {value}</ListItemText>
	<ListItemSecondaryAction className={styles.delete}>
          <IconButton aria-label="очистить" onClick={() => onClickDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
	</ListItem>
	);

export default Item;