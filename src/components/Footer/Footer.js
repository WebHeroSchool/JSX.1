import React from 'react';
import styles from './Footer.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';

const Footer = ({ count, id, onClickDeleteDone, onClickFilter, activeTask, doneTask }) =>
 (<footer>
  <div className={styles.unfinished}  onClick={() => onClickFilter('active')}>Осталось выполнить дел: {activeTask}</div>
<div className = {styles.filter}>
<ButtonGroup
 color="primary" 
 aria-label="outlined primary button group">
       
        <Button onClick={() => onClickFilter('allTask')}
        >Все {activeTask + doneTask}</Button>
       
       <Button onClick={() => onClickFilter('active')} 
        >Активные {activeTask}</Button>
       
        <Button onClick={() => onClickFilter('done')}
        >Выполненные {doneTask}</Button>
      </ButtonGroup>
      </div>
      <div className={styles.delete} onClick={() => onClickDeleteDone(id)}
      ><Button 
       value = 'Delete completed'
      variant="contained" 
      color="primary" disableElevation>
      Удалить выполненные дела: {doneTask}
    </Button>
    </div>
      </footer>
);

Footer.defaultProps = {
    count: 0,
    clickbox: 0
};
Footer.propTypes = {
    count: PropTypes.number.isRequired,
    clickbox: PropTypes.number.isRequired
};


export default Footer;