import React from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import Cards from './components/Cards';
import NetProfit from './components/NetProfit';
import Activity from './components/Activity';
import Goals from './components/Goals';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import Sidenav from './components/Sidenav';

const MainComponent = styled('div')({
      display: 'flex', 
      gap: '3.5em', 
      color: '#fff',
      '& .body_content': {
        flexGrow: 1, 
        backgroundColor: 'black', 
        display: 'flex' 
      }
})

const App = () => {
  return (
    <MainComponent >
      <Sidenav />
      <Box className = 'body_content'>
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <Grid container spacing={2.4}>
            <Grid item xs={12} md={8} lg={12}>
              <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Dashboard
              </Typography>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <Grid container spacing={2}>
                <Cards />
              </Grid>
              <Grid item xs={12}>
                <Activity />
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <NetProfit />
              <Goals />
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <RecentOrders />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <CustomerFeedback />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default App;
