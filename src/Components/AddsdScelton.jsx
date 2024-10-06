import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function AddsdScelton() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Skeleton variant="text" width="50%" sx={{ mb: 2, fontSize: '1.5rem' }} />
            <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width="100%" height={100} sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Skeleton variant="text" width="100%" height={30} sx={{ mb: 2 }} />
                <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
                <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="text" width="100%" height={30} sx={{ mb: 2 }} />
                <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
                <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
              </Grid>
            </Grid>
            <Skeleton variant="text" width="100%" height={30} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width="100%" height={50} sx={{ mb: 2 }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
