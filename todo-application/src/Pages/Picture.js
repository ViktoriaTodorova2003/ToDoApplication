import React from 'react';
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import MemeImage from '../Meme.png'; 

function Picture() {
  return (
    <Box sx={{ paddingTop: '10px', paddingLeft: { xs: '20px', sm: '65px' } }}>
      <Typography variant="h4" style={{ marginTop: '20px' }}>Picture</Typography>
      <Card sx={{ maxWidth: 345, padding: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          src={MemeImage}
          alt="leonardo dicaprio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Thank You!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Thank you for taking the time to review my application! I am looking forward to speaking with you soon!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  );
}

export default Picture;