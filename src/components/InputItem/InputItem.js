import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

class InputItem extends React.Component {
	state= {
		inputValue: ''	
	};

	onButtonClick = () =>{
		this.setState({
	inputValue: ''
		});
		this.props.onClickAdd (this.state.inputValue);
	};
	render() {
		
		const condition = this.props.hasError;
		let formHelperText;

		if(condition) {
			formHelperText = <FormHelperText
				id="component-error-text">
				Пустое поле!
				</FormHelperText>
		
		} else {
			formHelperText = ''
		}	

		return (<Grid>
		<FormControl error>
    <TextField
          label="Добавить задание"
          id="margin-dense"
          margin="dense"
          value={this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
        />

<div>
				{formHelperText}
			</div>
			</FormControl>

     <Button 
     variant="contained" 
     color="primary"
     fullWidth
     onClick={this.onButtonClick}
     >
        Добавить
      </Button>
</Grid>);
	}
}

export default InputItem; 