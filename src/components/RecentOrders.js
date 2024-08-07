import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

const orders = [
    { image: "/images/avatarimg2.jpeg", customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { image: "/images/avatarimg1.jpg", customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered' },
    { image: "/images/avatarimg2.jpeg", customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { image: "/images/avatarimg1.jpg", customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    { image: "/images/avatarimg2.jpeg", customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { image: "/images/avatarimg1.jpg", customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const StyledCard = styled(Card)({
    backgroundColor: '#202028',
    marginBottom: '1em',
    color: "white",
    borderRadius: '8px'
});

const StyledTypography = styled(Typography)({
    paddingLeft: "16px",
    fontWeight: 'bold',
});

const StyledTableContainer = styled(TableContainer)({
    backgroundColor: 'inherit',
    color: "white",

});

const StyledTableCell = styled(TableCell)({
    color: "white",
    borderBottom: '1px solid #393940',
});

const StatusBox = styled(Box)(({ status }) => ({
    color: status === 'Delivered' ? '#3ba876' : '#b75551',
    backgroundColor: status === 'Delivered' ? '#205544' : '#5b373a',
    borderRadius: '20px',
    width: "fit-content",
    padding: '4px 12px',
    display: "flex",
    textAlign: 'center',
    fontSize: '0.75rem',
}));

const RecentOrders = () => {
    return (
        <StyledCard>
            <CardContent>
                <StyledTypography variant="h6" component="div">
                    Recent Orders
                </StyledTypography>
                <StyledTableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Customer</StyledTableCell>
                                <StyledTableCell>Order No.</StyledTableCell>
                                <StyledTableCell>Amount</StyledTableCell>
                                <StyledTableCell align='left'>Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order, index) => (
                                <TableRow key={index}>
                                    <StyledTableCell>
                                        <Box display={'flex'} alignItems={'center'}>
                                            <Avatar src={order.image} style={{ width: 24, height: 24, marginRight: '8px' }} /> {order.customer}
                                        </Box>
                                    </StyledTableCell>
                                    <StyledTableCell>{order.orderNo}</StyledTableCell>
                                    <StyledTableCell>{order.amount}</StyledTableCell>
                                    <StyledTableCell >
                                        <StatusBox status={order.status} >
                                            {order.status}
                                        </StatusBox>
                                    </StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </CardContent>
        </StyledCard>
    );
};

export default RecentOrders;
