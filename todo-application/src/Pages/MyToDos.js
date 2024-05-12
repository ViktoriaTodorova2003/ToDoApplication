import React from 'react';
import ReadTasks from '../CRUD/ReadTasks';
import CreateTask from '../CRUD/CreateTask';
import { useState } from 'react';

import { Button } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';


function MyToDos() {
  const [showCreateTask, setShowCreateTask] = useState(false);

  const toggleCreateTask = () => {
    setShowCreateTask(!showCreateTask);
  };
  
  return (
    <div>
      <h1>My ToDos</h1>
      <ReadTasks />
      {!showCreateTask && (
        <Button variant="outlined" startIcon={<PostAddIcon />} onClick={toggleCreateTask}>
          Add Task
        </Button>
      )}
      {showCreateTask && <CreateTask />}
    </div>
  );
}

export default MyToDos;