import React from 'react';
import ReadTasks from '../CRUD/ReadTasks';
import CreateTask from '../CRUD/CreateTask';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';


function MyToDos() {
  return (
    <Box sx={{ paddingTop: '10px', paddingLeft: { xs: '20px', sm: '65px' } }}>
      <Typography variant="h4" style={{ marginTop: '20px' }}>My Tasks</Typography>
      <ReadTasks />
  </Box>
  );
}

export default MyToDos;