import React, { useState } from 'react';
import { useGlobalState, GlobalState } from '../App'; 
import { v4 as uuidv4 } from 'uuid';

import { List, ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, TextField, Button, Snackbar } from '@mui/material'; 
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import TaskIcon from '@mui/icons-material/Task';

function TasksCRUD() {
    const { todoTasks } = useGlobalState() || {};
    const [taskName, setTaskName] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openConfirmation, setOpenConfirmation] = useState(false); 
    const [taskToDeleteId, setTaskToDeleteId] = useState(null);

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const toggleTaskStatus = (taskId) => {
        const taskToUpdate = todoTasks.find(task => task.id === taskId);
        if (!taskToUpdate) return;
        taskToUpdate.status = taskToUpdate.status === 'done' ? 'pending' : 'done';
        GlobalState.set({
            todoTasks: [...todoTasks]
        });        
    };

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddTask = () => {
        if (taskName.trim() === '') {
            setOpenSnackbar(true);
            return;
        }

        if (!Array.isArray(todoTasks)) {
            GlobalState.set({
                todoTasks: [{ id: uuidv4(), name: taskName.trim(), status: 'pending' }]
            });
        } else {

            GlobalState.set({
                todoTasks: [...todoTasks, { id: uuidv4(), name: taskName.trim(), status: 'pending' }]
            });
        }
    
        setTaskName('');

  };

    const handleEditTask = (taskId, taskName) => {
        setEditingTaskId(taskId);
        setEditedTaskName(taskName);
        setIsEditing(true);
    };

    const handleSaveTask = (taskId) => {
        const updatedTasks = todoTasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    name: editedTaskName
                };
            }
            return task;
        });

        GlobalState.set({
            todoTasks: updatedTasks,
        });
        setEditingTaskId(null);
        setIsEditing(false);
    };


    const handleDeleteTask = (taskId) => {
        const updatedTasks = todoTasks.filter(task => task.id !== taskId);
        GlobalState.set({
            todoTasks: [...updatedTasks]
        });        
    };

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                {todoTasks &&
                    todoTasks.map(task => (
                        <ListItem key={task.id}>
                            <Checkbox        
                                onChange={() => toggleTaskStatus(task.id)}
                            />
                            {editingTaskId === task.id ? (
                                <TextField
                                    value={editedTaskName}
                                    onChange={(e) => setEditedTaskName(e.target.value)}
                                    onBlur={() => handleSaveTask(task.id)}
                                    autoFocus
                                />
                            ) : (
                                <ListItemText
                                    primary={<strong>{task.name}</strong>}
                                    secondary={task.status}
                                />
                            )}
                            <ListItemSecondaryAction>
                                {isEditing && editingTaskId === task.id ? (
                                    <IconButton onClick={() => handleSaveTask(task.id)}>
                                        <CheckOutlinedIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton onClick={() => handleEditTask(task.id, task.name)}>
                                        <EditOutlinedIcon />
                                    </IconButton>
                                )}
                                <IconButton onClick={() => handleDeleteTask(task.id)}  >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
            </List>
            <TextField id="standard-basic" label="Add a new task" variant="standard"  value={taskName} onChange={handleInputChange} />
            <Button onClick={handleAddTask} variant="contained" endIcon={<TaskIcon />}> Add </Button>
            <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message="Please enter a task name"
        />
        </div>
    );
  }

export default TasksCRUD;