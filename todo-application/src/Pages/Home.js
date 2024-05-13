
import React from 'react';
import { Box, Typography } from '@mui/material';


function Home() {

  return (
    <Box sx={{ paddingTop: '10px', paddingLeft: { xs: '20px', sm: '65px' } }}>
      <Typography variant="h4" style={{ marginTop: '20px' }}>Home</Typography>
      
        <Typography variant="body1" sx={{ padding: '10px' }}>
          Duodeka started out with 6 University student-entrepreneurs in 2017 at 
          our alma-mater in Tilburg. We early on saw and believed in the power 
          of multiplication through combining forces. That’s why we started the 
          Duodeka (6 times 2 = 12) cooperative.
        </Typography>
        <Typography variant="body1" sx={{ padding: '10px' }}>
        After focussing on solving complex organizational challenges for large 
          organizations and corporations by building custom software applications 
          for them, we gradually began developing our own SaaS building 
          infrastructure. This method aims to transform these solutions into great 
          SaaS companies. Because why should you only develop a custom application 
          for one company, when it can solve a problem for an entire market?
        </Typography>
        <Typography variant="body1" sx={{ padding: '10px' }}>
          After lots and lots of hard earned experience, we decided in 2020 to pivot 
          the company towards the venture building model. We still solve complex 
          organizational challenges, but only when the solution has the potential 
          to turn into a great SaaS company. Multiple at any given time, through our 
          Duodeka infrastructure.
        </Typography>
        <Typography variant="body1" sx={{ padding: '10px' }}>
          Building the solution for these wicked-problems can take years. Often 
          beyond the capacity or willingness of the usual suspects. However, 
          our structure empowers us to dedicate the time needed for these challenges. 
          Driven by our strong belief in the importance of solving these challenges 
          and the recognition that their resolution provides us with a distinct 
          competitive advantage.
        </Typography>
    </Box>
  );
}

export default Home;