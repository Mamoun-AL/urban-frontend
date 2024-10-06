import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function ListingsPageScleton() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        
        {/* Filter Section */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 2 }} />
              </Grid>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 2 }} />
              </Grid>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 2 }} />
              </Grid>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 2 }} />
              </Grid>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 2 }} />
              </Grid>
              <Grid item xs={2}>
                <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 2 }} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Listing Cards */}
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} key={item}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Grid container spacing={2}>
                
                {/* Image Placeholder */}
                <Grid item xs={3}>
                  <Skeleton variant="rectangular" width="100%" height={150} sx={{ borderRadius: 2 }} />
                </Grid>

                {/* Property Details */}
                <Grid item xs={9}>
                  <Skeleton variant="text" width="20%" height={30} sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="50%" height={30} sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="30%" height={20} sx={{ mb: 1 }} />
                  
                  {/* Buttons Placeholder */}
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 4 }} />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 4 }} />
                    </Grid>
                    <Grid item xs={2}>
                      <Skeleton variant="rectangular" width="100%" height={40} sx={{ borderRadius: 4 }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
