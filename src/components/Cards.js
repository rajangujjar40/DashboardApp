import React, { Fragment } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const cardData = [
    { title: 'Total Orders', value: '75', icon1: <ArrowDropUpIcon />, change: '3%', icon: <ShoppingCartIcon style={{ color: '#1976d2' }} />, bgColor: "#2d2f68" },
    { title: 'Total Delivered', value: '70', icon1: <ArrowDropDownIcon />, change: '-3%', icon: <LocalShippingIcon style={{ color: '#2e7d32' }} />, bgColor: "#235245" },
    { title: 'Total Cancelled', value: '05', icon1: <ArrowDropUpIcon />, change: '3%', icon: <CancelIcon style={{ color: '#e5615d' }} />, bgColor: "#593439" },
    { title: 'Total Revenue', value: '$1k', icon1: <ArrowDropDownIcon />, change: '-3%', icon: <AttachMoneyIcon style={{ color: '#db3caa' }} />, bgColor: "#572a4c" },
];

const StyledCard = styled(Card)({
    backgroundColor: '#202028',
    color: 'white',
    borderRadius: '8px',
});

const StyledCardContent = styled(CardContent)({
    paddingBottom: '16px !important',
});

const IconBox = styled(Box)(({ bgColor }) => ({
    backgroundColor: bgColor,
    borderRadius: '25%',
    display: 'inline-flex',
    padding: '8.5px',
    minWidth: 'fit-content',
    marginBottom: '5px',
}));

const ChangeTypography = styled(Typography)(({ isNegative }) => ({
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isNegative ? 'red' : 'green',
}));

const Cards = () => {
    return (
        <Fragment>
            {cardData.map((card, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                    <StyledCard>
                        <StyledCardContent>
                            <IconBox bgColor={card.bgColor}>
                                {card.icon}
                            </IconBox>
                            <Typography variant="body2" component="div" fontSize="0.75rem">
                                {card.title}
                            </Typography>
                            <Box display="flex" justifyContent="space-between" mt="9px">
                                <Typography variant="h4" fontWeight="bold">
                                    {card.value}
                                </Typography>
                                <ChangeTypography isNegative={card.change.startsWith('-')}>
                                    {card.icon1}
                                    {card.change}
                                </ChangeTypography>
                            </Box>
                        </StyledCardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Fragment>
    );
};

export default Cards;
