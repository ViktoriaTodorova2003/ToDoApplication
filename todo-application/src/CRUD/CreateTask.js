import React from 'react';
import { GlobalState, useGlobalState } from '../App';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, TextField } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';



function CreateTask() {
    const { todoTasks } = useGlobalState() || {};
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddTask = () => {
        const newTask = {
        id: uuidv4(), 
        name: taskName.trim(), 
        status: 'pending',
        };


    GlobalState.set({
        todoTasks: [...todoTasks, newTask],
    });

    setTaskName('');

  };

  return (
    <div>
        <TextField id="standard-basic" label="Add a new task" variant="standard"  value={taskName} onChange={handleInputChange} />
        <Button onClick={handleAddTask} variant="contained" endIcon={<TaskIcon />}> Add </Button>     
    </div>
  );
}

export default CreateTask;

  
