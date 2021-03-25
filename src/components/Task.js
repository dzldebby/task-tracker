
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete1, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} 
        onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes 
                    onClick={() => onDelete1(task.id)} 
                    style ={{color: 'red', cursor: 'pointer'}}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
