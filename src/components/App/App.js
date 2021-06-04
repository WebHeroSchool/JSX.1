import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

  const todoItem = 'Написать новое приложение';

  const App = () => {

  	const items = [
       {
       value:'Написать новое приложение'
       },
       {
       	value:'Прописать props-ы'
       },
       {
       	value:'Сделать все дела'
       }
  	];
return(
  	<div className="wrap">
  	<h1 className="wrap__title">Важные дела:</h1>
  	<InputItem />
  <ItemList items={items} />
  <Footer count={6} />
  </div>);
}

  export default App;