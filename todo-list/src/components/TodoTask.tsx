import React from 'react'
import { ITask} from '../interface'
import Popup from './Popup';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete:string):void;
  
}

const TodoTask = ({ task, completeTask}: Props) => {
  return (
    <div className='task'>

      <div className="content">
        <span> {task?.taskName}</span> 
        <span>{task?.deadline} </span>
      </div>
      <button onClick={() => completeTask(task?.taskName)}>{task?.trash ?? "Delete"}</button>
      
      
    </div>
  )
}

export default TodoTask