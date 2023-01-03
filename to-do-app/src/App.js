import React,{useEffect, useState} from 'react'
import {FormControl,Button,Form } from "react-bootstrap";
import {ReactComponent as Delete} from'./assets/delete.svg'
import {ReactComponent as Save} from './assets/save.svg'
import {ReactComponent as Edit} from'./assets/edit.svg'
import {v4 as uuidv4} from 'uuid';
import { isEditable } from '@testing-library/user-event/dist/utils';

function App() {

  const [todo,setTodo]=useState('')
  const [editingTodo,setEditTodo]=useState('')
  const [todoList,setTodoList]=useState([])
  //gerçekleşen değişşikliği görmek için useEffect kullanılır

  const addTodo =()=>
  {
    setTodoList(prevTodoList=>[...prevTodoList,{id:uuidv4(),todo:todo,isEditable:false,isCompleted:false}])
    setTodo("")
    //arrow functiondir
  }
  const completeTodo=(id)=>
  {
    setTodoList(prevTodoList=>prevTodoList.map(todoItem => todoItem.id === id ? {...todoItem,isCompleted: !todoItem.isCompleted}:todoItem))
  }
  const editTodo=(id,oldtodo)=>
  {
    setTodoList(prevTodoList=>prevTodoList.map(todoItem=> todoItem.id===id ? {...todoItem,isEditable: !todoItem.isEditable}: todoItem))
    setEditTodo(oldtodo)
  }
  const saveTodo=(id)=>
  {
    setTodoList(prevTodoList=>prevTodoList.map(todoItem=> todoItem.id===id ? {...todoItem,isEditable:!todoItem.isEditable, todo:editingTodo}: todoItem))
  }
  const deleteTodo=(id)=>
  {
    setTodoList(prevTodoList=>prevTodoList.filter(todoItem=> todoItem.id !==id))
  }

  return (
    <div align="center" id="root">
      <h1>TO DO LIST</h1>
      <div className="d-flex w-50 mt-5">
        <FormControl
        placeholder='task'
        aria-label='task'
        aria-describedby='basic-addon1'
        value={todo}
        onChange={(e) => setTodo(e.target.value)} />
        <Button className="btn btn-primary ms-5" onClick={()=>addTodo()} >ADD</Button> 
      </div>
      <div>
        {
          todoList.map(
            (todoItem) => 
            <div key={todoItem.id} className="d-flex justify-content-between">
              <div className='d-flex'>
                <Form.Check
                  type="checkbox"
                  className="me-3"
                  value="todoItem.isCompleted"
                  onChange={()=> completeTodo()}
                />
                {
                  !todoItem.isEditable 
                  ? <label className={`${todoItem.isCompleted ? "text-decoration-line-through" : '' } fx-bold`}> {todoItem.todo}</label>
                  : <FormControl
                      value={editTodo}
                      onChange={(e)=> setEditTodo(e.target.value)}
                    />
                }
                
                
              </div>
              <div>
                {
                  !todoItem.isEditable 
                  ? <Edit width={25} height={25} style={{cursor:'pointer'}} onClick={()=> editTodo(todoItem.id,todoItem.todo)}></Edit>
                  : <Save width={25} height={25} style={{cursor:'pointer'}} className='me-2' onClick={()=> saveTodo(todoItem.id)}></Save>
                }
                <Delete width={25} height={25} style={{cursor:'pointer'}} className='me-2' onClick={()=> deleteTodo(todoItem.id)}></Delete>
                
                
              </div>
            </div>
          )
        }
      </div>
      
      
    </div>
  );

}//click işlemi olduğunda yazdırır - event listeer fonksiyondur

export default App