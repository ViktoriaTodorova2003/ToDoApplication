import React from 'react';
import { useGlobalState } from './App'; 

function TestComponent() {
  const { createTask, getAllTasks } = useGlobalState();

  const handleCreateTask = ( name ) => {
    const id = Math.floor(Math.random() * 1000); 
    const status = 'Pending';
    createTask(id, name, status);
  };


  const handleGetAllTasks = () => {
    getAllTasks(); 
  };

  return (
    <div>
      <button onClick={() => handleCreateTask("Test this method")}>Create Task with Name</button>
      <button onClick={handleGetAllTasks}>Get All Tasks</button>
    </div>
  );
}

export default TestComponent;