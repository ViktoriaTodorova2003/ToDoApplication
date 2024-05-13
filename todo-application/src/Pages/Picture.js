import React from 'react';
import { Box, Typography } from '@mui/material';

function Picture() {
  return (
    <Box sx={{ paddingTop: '10px', paddingLeft: { xs: '20px', sm: '65px' } }}>
      <Typography variant="h4" style={{ marginTop: '20px' }}>Hello World!</Typography>
    </Box>
  );
}

export default Picture;