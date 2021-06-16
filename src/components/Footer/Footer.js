import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({ count }) => (<footer><div className={styles.count}>Осталось выполнить вот столько дел: {count} </div>
<div>
<ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>Все</Button>
        <Button>Активные</Button>
        <Button>Выполненные</Button>
      </ButtonGroup>
      </div>
      <div className={styles.delete}><Button variant="contained" color="primary" disableElevation>
      Удалить выполненные дела
    </Button></div>
      </footer>
)

Footer.defaultProps = {
    count: 0
};


export default Footer;