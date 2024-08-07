import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




const NetProfit = () => {
  const progress = 70;
  const profit = 6759.25;
  const increasePercentage = 3;

  return (
    <Card sx={{ backgroundColor: '#202028', color: "white", display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, borderRadius: '8px' }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" component="div" gutterBottom>
          Net Profit
        </Typography>
        <Typography variant="h4" component="div" fontWeight='bold' >
          ${profit.toFixed(2)}
        </Typography>
        <Box display="flex" alignItems="center" color="green" sx={{ marginTop: 1.8 }} >
          <ArrowDropUpIcon />
          <Typography variant="body2" component="div" sx={{ marginLeft: 0.5 }}>
            {increasePercentage}%
          </Typography>
        </Box>
      </CardContent>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: 2,
          position: 'relative',
          width: {
            xs: '100px',
            sm: '110px',
            md: '120px',
            lg: '130px'
          },
          height: {
            xs: '100px',
            sm: '110px',
            md: '120px',
            lg: '130px'
          },
          maxWidth: '130px',
          maxHeight: '130px',
          '.CircularProgressbar-path': {
            strokeWidth: '9px',
          },
        }}
      >
        <CircularProgressbarWithChildren
          value={progress}
          styles={buildStyles({
            pathColor: '#808cff',
            trailColor: '#2e2f68',
            strokeLinecap: 'round',
            strokeWidth: 10,
          })}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: {
                  xs: '0.7rem',
                  sm: '0.8rem',
                  md: '0.9rem',
                  lg: '1rem',
                },
              }}
            >
              {`${progress}%`}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontSize: {
                  xs: '0.5rem',
                  sm: '0.55rem',
                  md: '0.5rem',
                  lg: '0.6rem',
                },
              }}
            >
              Goal
              <br />
              Completed
            </Typography>
          </Box>
        </CircularProgressbarWithChildren>
      </Box>



    </Card>
  );
};

export default NetProfit;
