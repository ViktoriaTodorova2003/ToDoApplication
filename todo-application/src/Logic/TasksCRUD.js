import React, { useState } from 'react';
import { useGlobalState, GlobalState } from '../App'; 
import { v4 as uuidv4 } from 'uuid';

import { List, ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, TextField, Button,Snackbar, Dialog, DialogActions, DialogTitle } from '@mui/material'; 
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import TaskIcon from '@mui/icons-material/Task';

const _ = require('lodash');

function TasksCRUD() {
    const { todoTasks } = useGlobalState() || {};
    const [taskName, setTaskName] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [taskToDeleteId, setTaskToDeleteId] = useState(null);

    const _ = require('lodash');

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const toggleTaskStatus = (taskId) => {
        const taskIndex = _.findIndex(todoTasks, { id: taskId });
        if (taskIndex === -1) return;
    
        const updatedTasks = _.cloneDeep(todoTasks);
        updatedTasks[taskIndex].status = updatedTasks[taskIndex].status === 'done' ? 'pending' : 'done';
    
        GlobalState.set({
            todoTasks: updatedTasks
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
    
        const newTask = { id: uuidv4(), name: taskName.trim(), status: 'pending' };
    
        GlobalState.set({
            todoTasks: _.isArray(todoTasks) ? [...todoTasks, newTask] : [newTask]
        });
    
        setTaskName('');
    };

    const handleEditTask = (taskId, taskName) => {
        setEditingTaskId(taskId);
        setEditedTaskName(taskName);
        setIsEditing(true);
    };

    const handleSaveTask = (taskId) => {
        const updatedTasks = _.map(todoTasks, task => {
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
        setTaskToDeleteId(taskId); 
        setOpenConfirmation(true); 
    };

    const confirmDeleteTask = () => {
        const updatedTasks = _.filter(todoTasks, task => task.id !== taskToDeleteId);
        GlobalState.set({
            todoTasks: updatedTasks
        });
        setOpenConfirmation(false);
    };

    const handleCancelDelete = () => {
        setOpenConfirmation(false); 
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
            
            <Dialog
                open={openConfirmation}
                onClose={handleCancelDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this task?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDeleteTask} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

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