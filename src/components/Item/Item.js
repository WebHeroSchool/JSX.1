import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';



	class Item extends React.Component {
	componentDidMount() {
		this.timerID = setInterval(() => console.log ('interval'),1000);
	}
    componentDidUpdate() {
    console.log('componentDidUpdate');
  }
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	render () {
		const { value, isDone, onClickDone, id, onClickDelete} = this.props;
		return(<ListItem className={
	classnames({
		[styles.item]: false,
		[styles.done]: isDone
	})
}>
<Checkbox
color="primary"
onClick={() => onClickDone(id)}
 inputProps={{ 'aria-label': 'uncontrolled-checkbox'
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
	}
}


	 Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  };


export default Item;