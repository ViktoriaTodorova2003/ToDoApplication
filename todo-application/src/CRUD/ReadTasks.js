import React from 'react';
import { useGlobalState, GlobalState } from '../App'; 
import { List, ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'; 
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function ReadTasks() {
    const { todoTasks } = useGlobalState() || {};

    const toggleTaskStatus = (taskId) => {
        const taskToUpdate = todoTasks.find(task => task.id === taskId);
        if (!taskToUpdate) return;
        taskToUpdate.status = taskToUpdate.status === 'done' ? 'pending' : 'done';
        GlobalState.set({
            todoTasks: [...todoTasks]
        });        
    };

    const handleEditTask = (taskId) => {
       //TESTTTTrtrtjtkyuluikhgjfjyyrt
    };

    const handleDeleteTask = (taskId) => {
           
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
                        <ListItemText>
                            <strong>{task.name}</strong> - {task.status}
                        </ListItemText>
                        <ListItemSecondaryAction>
                                <IconButton onClick={() => handleEditTask(task.id)}>
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteTask(task.id)}>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                    </ListItem>
                ))}
        </List>
    </div>
    );
  }

export default ReadTasks;