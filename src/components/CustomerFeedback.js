import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Rating } from '@mui/material';
import { styled } from '@mui/system';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const feedbacks = [
    {
        image: "/images/avatarimg1.jpg",
        name: 'Jenny Wilson',
        feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome...',
        value: 4
    },
    {
        image: "/images/avatarimg2.jpeg",
        name: 'Dianne Russell',
        feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service. Something something hello honey bunny..',
        value: 3
    },
    {
        image: "/images/avatarimg1.jpg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 5
    },
    {
        image: "/images/avatarimg2.jpeg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 2
    },
    {
        image: "/images/avatarimg1.jpg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 3
    },
    {
        image: "/images/avatarimg2.jpeg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 4
    },
    {
        image: "/images/avatarimg1.jpg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 5
    },
    {
        image: "/images/avatarimg2.jpeg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 2
    },
    {
        image: "/images/avatarimg1.jpg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 5
    },
    {
        image: "/images/avatarimg2.jpeg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 4
    },
    {
        image: "/images/avatarimg1.jpg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 3
    },
    {
        image: "/images/avatarimg2.jpeg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 1
    },
    {
        image: "/images/avatarimg1.jpg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 4
    },
    {
        image: "/images/avatarimg2.jpeg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 2
    },
    {
        image: "/images/avatarimg1.jpg",
        name: 'Devon Lane',
        feedback: 'Normally wings are wings, but theirs are lean meaty and tender add something to make it look pleasant, add more please...',
        value: 3
    },
];

const StyledCard = styled(Card)({
    backgroundColor: '#202028',
    // marginBottom: '3em',
    color: 'white',
    maxHeight: '180em',
    borderRadius: '8px',
});

const StyledCardContent = styled(CardContent)({});

const StyledTypographyTitle = styled(Typography)({
    marginBottom: '1.5em',
    fontWeight: 'bold',
});

const ScrollBox = styled(Box)({
    height: '375.2px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#202028',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
});

const FeedbackBox = styled(Box)({
    marginBottom: '1.5em',
    borderBottom: '1px solid #393940'
});

const FeedbackHeader = styled(Box)({
    display: 'flex',
    marginBottom: '1em',
});

const StyledAvatar = styled(Avatar)({
    width: '24px',
    height: '24px',
    marginRight: '1em',
});

const FeedbackTypography = styled(Typography)({
    color: '#babcc3',
    marginBottom:'12px'
});

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ebe600',
    },
    '& .MuiRating-iconEmpty': {
        color: '#dbdbda',
    },
});

const CustomerFeedback = () => {
    return (
        <StyledCard>
            <StyledCardContent>
                <StyledTypographyTitle variant="h6" component="div">
                    Customer's Feedback
                </StyledTypographyTitle>
                <ScrollBox>
                    {feedbacks.map((feedback, index) => (
                        <FeedbackBox key={index}>
                            <FeedbackHeader>
                                <StyledAvatar src={feedback.image} />
                                <Typography variant="body1">
                                    {feedback.name}
                                </Typography>
                            </FeedbackHeader>
                            <StyledRating
                                name="read-only"
                                value={feedback.value}
                                readOnly
                                icon={<StarIcon />}
                                emptyIcon={<StarIcon style={{ opacity: 1, color: "#dbdbda" }} fontSize="inherit" />}
                            />
                            <FeedbackTypography variant="body2" component="div">
                                {feedback.feedback}
                            </FeedbackTypography>
                        </FeedbackBox>
                    ))}
                </ScrollBox>
            </StyledCardContent>
        </StyledCard>
    );
};

export default CustomerFeedback;
