import React from 'react'
import { useState } from 'react';


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add task');
      return;
    }

    onAdd({ text, day, reminder })
    setText('');
    setDay('');
    setReminder('');
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Day & TIme</label>
        <input type="text" placeholder="Add Day & TIme" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input checked={reminder} type="checkbox" value={reminder} onChange={(e) => setReminder(e.target.checked)} />
      </div>
      <input type="submit" value="Save" className='btn btn-block' />
    </form>
  )
}


export default AddTask
