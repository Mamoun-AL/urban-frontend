import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Skelton2() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {/* Left Large Image */}
        <Grid item xs={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height={450} // Adjusted height for the large image
              sx={{ borderRadius: 2 }} // Optional border-radius for smoothness
            />
          </Paper>
        </Grid>

        {/* Right Small Images */}
        <Grid item xs={4}>
          <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height={200} // Adjusted height for the first smaller image
              sx={{ borderRadius: 2 }} // Optional border-radius for smoothness
            />
          </Paper>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height={200} // Adjusted height for the second smaller image
              sx={{ borderRadius: 2 }} // Optional border-radius for smoothness
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
