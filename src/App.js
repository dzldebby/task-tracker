import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Text 1',
        day: 'Feb 6th at 1.30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Text 2',
        day: 'Feb 16th at 1.30pm',
        reminder: true,
    }
  ])

//Delete task 

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


// Toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id
  ? {...task, reminder: !task.reminder} : task))
}



  return (
    <div className="container">
    <Header />
    {tasks.length > 0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    ) : (
      'No tasks to show'
    )}
    </div>
  );
}

export default App;
