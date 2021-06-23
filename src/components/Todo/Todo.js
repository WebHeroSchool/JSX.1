import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import styles from './Todo.module.css';

  const App = () => {
  
  	const initialState = {
  		items: [
       {
       value:'Написать новое приложение',
       isDone: false,
       id: 1
       },
       {
       	value:'Прописать props-ы',
       	isDone: false,
       	id: 2
       },
       {
       	value:'Сделать все дела',
       	isDone: false,
       	id: 3
       }
  	],
  	count: 3
  };

     const [items, setItems] = useState (initialState.items);
	const [count, setCount] = useState (initialState.count);

	useEffect(() => {console.log('mount');}, []);
	useEffect(() => {console.log('update');});

  const onClickDone = id => {
    const newItemList = items.map(item => {
     			const newItem = { ...item };
     			if (item.id === id) {
     				newItem.isDone = !item.isDone;
     			}
     			return newItem;
     		});
     	 setItems(newItemList);
     };

const onClickDelete = id => {
		const newItemList = items.filter(item =>{
		return item.id !== id; 
			});
      setItems(newItemList)
			setCount(count - 1)
  };

    const onClickAdd = value => {
      setItems (
        [...items,
          {
            value,
            isDone: false,
            id: count + 1
      }]);
      setCount(count + 1)
    }

      
      	
return(
  	<div className={styles.wrap}>
  	<h1 className={styles.title}>Важные дела:</h1>
  	<InputItem onClickAdd = {onClickAdd} /> 
        <ItemList 
        items = {items} 
        onClickDone={onClickDone} 
        onClickDelete={onClickDelete}/>
        <Footer count = {count} />
  </div>);
}
      
 
  

  export default App;