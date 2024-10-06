import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function AdSkeleton() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {/* Side Menu */}
        <Grid item xs={3}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height={30} 
              sx={{ mb: 2, borderRadius: 2 }} // Border-radius added here
            />
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height={79} 
              sx={{ borderRadius: 2 }} // Border-radius added here
            />
          </Paper>
        </Grid>

        {/* Ads Section */}
        <Grid item xs={9}>
          {/* First Ad */}
          <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Skeleton 
                  variant="rectangular" 
                  width="100%" 
                  height={150} // Adjusted height to 150px
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
              </Grid>
              <Grid item xs={8}>
                <Skeleton 
                  variant="text" 
                  width="60%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
                <Skeleton 
                  variant="text" 
                  width="40%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
                <Skeleton 
                  variant="text" 
                  width="30%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Second Ad */}
          <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Skeleton 
                  variant="rectangular" 
                  width="100%" 
                  height={150} // Adjusted height to 150px
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
              </Grid>
              <Grid item xs={8}>
                <Skeleton 
                  variant="text" 
                  width="60%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
                <Skeleton 
                  variant="text" 
                  width="40%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
                <Skeleton 
                  variant="text" 
                  width="30%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Third Ad */}
          <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Skeleton 
                  variant="rectangular" 
                  width="100%" 
                  height={150} // Adjusted height to 150px
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
              </Grid>
              <Grid item xs={8}>
                <Skeleton 
                  variant="text" 
                  width="60%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
                <Skeleton 
                  variant="text" 
                  width="40%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
                <Skeleton 
                  variant="text" 
                  width="30%" 
                  sx={{ borderRadius: 2 }} // Border-radius added here
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Additional Ads (Repeat for more) */}
        </Grid>
      </Grid>
    </Box>
  );
}
