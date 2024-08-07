import { Box, FormControl, Select, Typography, MenuItem, styled } from '@mui/material';
import Chart from 'react-apexcharts';

const options = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false
    },
    background: '#202028',
    foreColor: '#fff'
  },
  plotOptions: {
    bar: {
      borderRadius: 14
      ,
      columnWidth: '42%',
      endingShape: 'flat',

    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    labels: {
      rotate: 0,
      style: {
        colors: '#fff'
      }
    },
    categories: ['5', '6', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  grid: {
    borderColor: '#444',
    xaxis: {
      lines: {
        show: false,
      }
    }
  },
  fill: {
    colors: ['#6C5DD3']
  },
  tooltip: {
    theme: 'dark'
  }
};

const series = [{
  name: 'Activity',
  data: [5000, 6000, 8000, 15000, 12000, 7000, 5000, 9000, 14000, 7000, 11000, 6000]
}];

const MainComponent = styled('div')({
  backgroundColor: '#202028',
  padding: 3,
  marginTop: 25,
  borderRadius:"8px",
  '& .upper_box': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1em',
    paddingLeft: '1.1rem',
    paddingRight: '1rem',
    '@media(min-width: 1100px)': {
      paddingRight: '1.5rem',
      paddingLeft: '1rem'
    },
    '@media(max-width: 800px)': {
      paddingRight: '0.5rem',
      paddingLeft: '1rem'
    }
  },
  '& .Form_controller': {
    minWidth: 120,
    borderRadius: '25px',
    '& .MuiSelect-select': {
      padding: "6px 0px 6px 15px",
      borderRadius: '35px',
      border: "none",
      backgroundColor: '#6c6d70',
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#25273C',
    },
    '& .MuiSvgIcon-root': {
      color: '#fff',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    }
  }
})

const Activity = () => {
  return (
    <MainComponent >
      <Box className='upper_box'>
        <Typography variant='caption'>Activity</Typography>
        <FormControl
          className='Form_controller'
          variant="outlined"
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="Weekly"
            displayEmpty
            background='#9fa1aa'
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
              backgroundColor: '#202028',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },

              '& .MuiSvgIcon-root': {
                color: '#fff',
              },
            }}
          >
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
            <MenuItem value="Yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Chart options={options} series={series} type="bar" height={190}  />
    </MainComponent>
  );
};

export default Activity;
