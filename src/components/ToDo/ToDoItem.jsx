import React, { useState } from 'react';
import classNames from 'classnames';
const ToDoItem = ({task, toggleTaskCompleted, editTask, deleteTask}) => {
    const [isEditing, setEditing] = useState(false);
    const [newname, setNewName] = useState('');
    const handlerSubmit = () => {
        if(newname.trim().length)
        {
        editTask(task.id,newname)
        }
        setNewName(newname=>newname='')
        setEditing(false)
    }
    const viewTemplate =
     <div>
        <input type="checkbox" defaultChecked={task.completed}
                onChange={()=>{toggleTaskCompleted(task.id)}}/>
            <span className={classNames({complete: task.completed})}>{task.name}</span>
            <div>
                <button onClick={()=>{setEditing(true)}}>Edit</button>
                <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
            </div>
    </div>

    const editingTemplate =
    <div>
        New name for {task.name}:
        <input type="text" value={newname} 
            onChange={(e)=>{setNewName(e.target.value)}}/>
        <div>
            <button onClick={()=>{setEditing(false)}}>Cancel</button>
            <button onClick={handlerSubmit}>Save</button>
        </div>
    </div>
    return (
        <li>
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    );
}

export default ToDoItem;
