import React from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import copyright from './img/copyright.png';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

const App = () => (
   <Router>
		 <div className={styles.wrap}>
		    <div className={styles.sidebar}>
		    <MenuList>
		      <Link to='/' className={styles.link}><MenuItem>About</MenuItem></Link>
		      <Link to='/todo' className={styles.link}><MenuItem>Tasks</MenuItem></Link>
		      <Link to='/contacts' className={styles.link}><MenuItem>Contacts</MenuItem></Link>
		    </MenuList>
		      </div>

		      <Card className={styles.content}>
		        <Route path='/' exact component = {About} />
		        <Route path='/todo'  component = {Todo} />
		        <Route path='/contacts'  component = {Contacts} />
		        <div className={styles.img}>
					<img src = {copyright} alt="copyright" className={styles.copyright}></img>
				</div>
		      </Card>

			</div>
			</Router>);

	export default App; 