import {v4 as uuidv4} from 'uuid';
const tasksReducer = (taskList,action) => {
    switch (action.type) {
        case 'added':
            let newTask = {
                id: uuidv4(),
                name: action.name,
                completed: false
            }
            return([...taskList,newTask])
        case 'toggle':
            let updatedTasks = taskList.map(task=>{
                if(task.id===action.id)
                {
                    return {...task, completed: !task.completed}
                }
                return task
            })
            return updatedTasks
        case 'delete':
            return taskList.filter(task=>task.id !== action.id)
        case 'edit':
            const editedTaskList = taskList.map((task)=>{
                if(task.id===action.id)
                {
                    return{...task,name:action.name}
                }
                return task
            })
            return editedTaskList
        default:
            break;
    }
}

export default tasksReducer;