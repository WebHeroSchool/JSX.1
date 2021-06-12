import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';


const InputItem = () => (<div className={styles.input}>
    <TextField
          label="Добавить задание"
          id="margin-dense"
          margin="dense"
        />
        </div>)

export default InputItem; 