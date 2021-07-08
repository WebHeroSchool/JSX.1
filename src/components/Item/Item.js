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
	/*componentDidMount() {
		this.timerID = setInterval(() => console.log ('interval'),1000);
	}
    componentDidUpdate() {
    console.log('componentDidUpdate');
  }
	componentWillUnmount() {
		clearInterval(this.timerID);
	}*/
	
	render () {
		const { value, isDone, onClickDone, id, onClickDelete} = this.props;
		return(
			
	<ListItem className={
	 classnames({
		[styles.item]: true,
		[styles.done]: isDone,
	})
}> 


<Checkbox
checked={isDone}
color="primary"
 inputProps={{ 'aria-label': 'uncontrolled-checkbox'
  }}
   onClick={() => onClickDone(id)} 
/>
      
	  <ListItemText > {value}</ListItemText>
	<ListItemSecondaryAction className={styles.delete}>
          <IconButton
           aria-label="очистить"
            className = { styles.basket }
            onClick={() => onClickDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
	</ListItem>);
	}
}


	 Item.defaultProps = {
    isDone: false,
};
Item.propTypes = {
    value: PropTypes.oneOfType ([
        PropTypes.string,
        PropTypes.number
    ]),
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};


export default Item;