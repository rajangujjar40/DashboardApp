import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import FlagIcon from '@mui/icons-material/Flag';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const data = [
  { title: 'Goals', icon: <FlagIcon sx={{ color: '#e5615d' }} />, color: '#593439' },
  { title: 'Popular Dishes', icon: <RestaurantMenuIcon sx={{ color: '#1976d2' }} />, color: '#2d2f68' },
  { title: 'Menus', icon: <MenuBookIcon sx={{ color: '#2e7d32' }} />, color: '#235245' },
];

const StyledCard = styled(Card)(({ index }) => ({
  backgroundColor: '#202028',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: index === 0 ? '8px 8px 0 0' : index === 2 ? '0 0 8px 8px' : '0',
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  alignItems: 'center',
});

const StyledIconButton = styled(IconButton)(({ color }) => ({
  backgroundColor: color,
  color: 'white',
  marginRight: '0.5em',
  padding: '0.717em',
}));

const ForwardIconButton = styled(IconButton)({
  color: 'white',
  backgroundColor: "#55565b",
  borderRadius: "100px",
  padding: "8px",
  minWidth: "fit-content",
  marginRight: '2em',
});

const CardItem = ({ icon, title, color, index }) => {
  return (
    <StyledCard index={index}>
      <StyledCardContent>
        <StyledIconButton color={color}>
          {icon}
        </StyledIconButton>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </StyledCardContent>
      <ForwardIconButton>
        <ArrowForwardIosIcon sx={{ fontSize: '0.75rem' }} />
      </ForwardIconButton>
    </StyledCard>
  );
};

const Goals = () => {
  return (
    <Box>
      {data.map((item, index) => (
        <CardItem key={index} icon={item.icon} title={item.title} color={item.color} index={index} />
      ))}
    </Box>
  );
};

export default Goals;
