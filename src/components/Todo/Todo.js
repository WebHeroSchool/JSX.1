import React, {useState, useEffect} from 'react';
import CardContent from '@material-ui/core/CardContent';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
    const initialState = {
      items: JSON.parse(localStorage.getItem('items')) ||
      [
          {
            value: 'Написать новое приложение',
            isDone: false,
            id:1
          },
          {
            value: 'Написать props-ы',
            isDone: false,
            id:2
          },
          {
            value: 'стилизовать',
            isDone: false,
            id:3
          },
        ],
        count: 3,
        filter: 'all'
  };

  const [items, setItems] = useState (initialState.items);
  const [count, setCount] = useState (initialState.count);
  const [filter, setFilter] = useState ('allTask');
  const [ isError, setIsError ] = useState(initialState.isError);
const [ isErrorSame, setIsErrorSame ] = useState(initialState.isErrorSame);
const [ isSuccess, setIsSuccess ] = useState(initialState.isSuccess);
const [ isEdited, setIsEdited ] = useState(initialState.isEdited);
const [ isDeleted, setIsDeleted ] = useState(initialState.isDeleted);
const [ newValue, setNewValue ] = useState(initialState.newValue);
  let itemsFilter;
  
  useEffect(() => {console.log('mount');}, []);
  useEffect(() => {console.log('update');});
  useEffect(() => {localStorage.setItem('items', JSON.stringify(items));})
  
  const onClickDone = id => {
    const newItemList = items.map(item =>{
      const newItem = { ...item};
      if(item.id ===id) {
        newItem.isDone = !item.isDone;
      }
      return newItem
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

  
  const onClickDeleteDone = id => {
    const newItemList = items.filter(item =>{
      return item.isDone !== true; 
    });
    setItems(newItemList);
  };

  const activeTask = (items.filter((item) => item.isDone === false)).length;
  const doneTask = (items.filter((item) => item.isDone === true)).length;

  const onClickFilter = filtered => setFilter(filtered);

  switch (filter) {
    case 'done':
      itemsFilter = items.filter(item => item.isDone);
      break;
    case 'active':
      itemsFilter = items.filter(item => !item.isDone);
      break;
    default:
      itemsFilter = items;    
  }


const onClickAdd = value => {
    let isActive = true;
    const newItems = [
      ...items,
        {
          value,
          isDone: false,
          id: Date.now(),
          order: Date.now(),
          isVisible: isActive,
          isEditing: false
        }            
    ];

    newItems.reverse(function(a, b){
      return a.id-b.id
    });

    setTimeout(() => {
      setIsError(false)
      setIsErrorSame(false)
      setIsSuccess(false)
      setIsDeleted(false)
    }, 1500);

  const inputValidationSame = items.find(item => {
    return item.value === value;    
    });

    if (value === '' ) {
      setIsError(true)
      setItems(items)
    } else if (inputValidationSame) {
      setIsError(false)
      setIsErrorSame(true)
      setItems(items);
    } else {
      setIsError(false)
      setIsErrorSame(false)
      setIsSuccess(true)
      setCount((count) => count + 1)
      setItems(newItems)
    }

  };


  const sortItems = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  };

  const editItem = (id, value) => {
    const newItems = items.map(item => {
      const newItem = {...item};

      if (newItem.id === id) {
        newItem.isEditing = true;
      }

      return newItem;
    }); 

    setNewValue(value)
    setItems(newItems)
    
  };

  const newItemValue = (id, value) => {
    const newItems = items.map(item => {
      const newItem = {...item};

      if (newItem.id === id) {
        newItem.value = value;
        newItem.isEditing = false;
      }

      return newItem;
    }); 

    setNewValue('')
    setItems(newItems);
    setCount((count) => count - 1);

    setTimeout(() => {
      setIsError(false);
      setIsErrorSame(false);
      setIsSuccess(false);
      setIsEdited(false);
    }, 1500);

    const inputValidationSame = items.find(item => {
      return item.value === value;    
      });
  
      if (value === '' ) {
        setIsError(true);
        setItems(items);
      } else if (inputValidationSame) {
        setIsError(false);
        setIsErrorSame(true);
        setItems(items); 
      } else {
        setIsError(false);
        setIsErrorSame(false);
        setIsEdited(true);
        setCount((count) => count + 1);
        setItems(newItems);
      }
}


    return (
      <CardContent>
        <h1 className={styles.title}>TODOLIST</h1>
        <InputItem
         items={items}
         onClickAdd={onClickAdd}
         isError = { isError }
            isErrorSame = { isErrorSame } 
            isSuccess = { isSuccess }
            isEdited = { isEdited }
            isDeleted = { isDeleted }
          />
        <ItemList 
          items={itemsFilter} 
          onClickDone={onClickDone}  
          onClickDelete={onClickDelete}
          setNewValue = { setNewValue }
            sortItems = { sortItems }
            editItem ={ editItem }
            newItemValue = { newItemValue }
            newValue={ newValue }
           />
        <Footer filtered={filter}
          onClickFilter={onClickFilter} 
          count={count}
          activeTask = {activeTask}
          doneTask = {doneTask}
          onClickDeleteDone={onClickDeleteDone}
        />
      </CardContent>);
}

export default Todo;