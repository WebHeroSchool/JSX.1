import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';

class InputItem extends React.Component {
	state= {
		inputValue: '',
		error: false       
	};

	onButtonClick = () =>{
		this.setState({
	     inputValue: ''
		});
		this.props.onClickAdd (this.state.inputValue);
	};
	render() {
	const errorEmpty = this.props.isError;
    const errorSame = this.props.isErrorSame;
    const success = this.props.isSuccess;

    let alert;
		if ( errorEmpty ) {
        alert = <Alert 
        severity="error">This field cannot be empty!
        </Alert>
		  } else if ( errorSame ) {
        alert = <Alert 
        severity="error">This task has already been added!
        </Alert>
      } else if ( success ) {
        alert = <Alert 
        severity="success">Your task successfully added!
        </Alert>
      } else {
        alert = ''
      }

return (<Grid>
		
		<div>
      { alert }
    </div>
    <TextField
          label="Add task"
          id="margin-dense"
          margin="dense"
          value={this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value})}
        />


     <Button 
     variant="contained" 
     color="primary"
     fullWidth
     onClick={this.onButtonClick}
     >
       Create
      </Button>
</Grid>);
	}
};

InputItem.propTypes = {
  InputValue: PropTypes.oneOfType ([
    PropTypes.string
  ])
}

export default InputItem; 