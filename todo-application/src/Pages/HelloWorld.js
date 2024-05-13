import React from 'react';
import { Box, Typography, Grid, Skeleton } from '@mui/material';

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : []).map((_, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

function HelloWorld() {
  return (
    <Box sx={{ paddingTop: '10px', paddingLeft: { xs: '20px', sm: '65px' } }}>
      <Typography variant="h4" style={{ marginTop: '20px' }}>Hello World!</Typography>
      <Box sx={{ overflow: 'hidden' }}>
        <Typography variant="subtitle2">*This is just a filler page, it is not going to load</Typography>
        <Media loading={true} /> 
        <Media loading={true} /> 
    </Box>
    </Box>
  );
}

export default HelloWorld;