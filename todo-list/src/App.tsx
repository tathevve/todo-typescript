import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import Popup from './components/Popup';
import TodoTask from './components/TodoTask';
import { ITask } from './interface'


const App: FC = () => {

  const [task, setTask] = useState<string>("")
  // const [trash, setTrash] = useState<string>("X")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [buttonPopUp, setButtonPopUp] = useState<boolean>(false)
  const [taskName,setTaskName] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }

  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    setTodoList([...todoList, newTask])
    setTask("")
    setDeadline(0)
    console.log(todoList)
  }

  const handleConfirmToDelete = () => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskName
    }))
  }
 
  const completeTask = (taskNameToDelete: string): void => {
    setButtonPopUp(true)
    setTaskName(taskNameToDelete)
    
  }


  return (
    <div className="App">
      <div className='header'>
        <div className="inputContainer">
          <input type="text" placeholder='Task...' name='task' value={task} onChange={handleChange} />
          <input type="number" placeholder='Deadline (in days)...' name='deadline' value={deadline} onChange={handleChange} />

        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {
          todoList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} completeTask={completeTask} />
          })
        }
      </div>

      {
        buttonPopUp ? <div className='a'>
          <button onClick={
            () => {
              setButtonPopUp(false)  
              handleConfirmToDelete();
              setTaskName("");
            }
          }>yes</button>
          <h3>Delete the task?</h3>
        </div> : ""

      }

    </div>
  );
}

export default App;
