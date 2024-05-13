import React from 'react';
import TasksCRUD from '../Logic/TasksCRUD';
import { Box, Typography } from '@mui/material';

function MyTasks() {
  return (
    <Box sx={{ paddingTop: '10px', paddingLeft: { xs: '20px', sm: '65px' } }}>
      <Typography variant="h4" style={{ marginTop: '20px' }}>My Tasks</Typography>
      <TasksCRUD />
  </Box>
  );
}

export default MyTasks;