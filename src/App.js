import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Parents meeting at School',
        day: 'Feb 6th at 2:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 7th at 2:30pm',
        reminder: false
    }
])

// Delete Task
const deleteTask = (id) => {
  console.log('delete', id);
  setTasks(tasks.filter((task) => task.id !== id ))
}

// Toggle Reminder
const toggleReminder = (id) => {
console.log(id);
setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
}

return (
    <div className="container">
      <Header title="Task Tracker"/>
      { tasks.length > 0 ?
        <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
        : 'No tasks to show'
      }
    </div>
  );
}

export default App;
