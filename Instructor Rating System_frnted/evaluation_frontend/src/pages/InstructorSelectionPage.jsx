import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Rating,
    Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Dummy instructor data
const instructors = [
    { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/150', rating: 4.5 },
    { id: 2, name: 'Jane Smith', image: 'https://via.placeholder.com/150', rating: 4.0 },
    { id: 3, name: 'Alice Johnson', image: 'https://via.placeholder.com/150', rating: 4.8 },
    { id: 4, name: 'Bob Brown', image: 'https://via.placeholder.com/150', rating: 3.9 },
    { id: 5, name: 'Charlie Davis', image: 'https://via.placeholder.com/150', rating: 4.2 },
];

const InstructorSelectionPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const filteredInstructors = instructors.filter(instructor =>
        instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInstructorClick = (instructor) => {
        // Navigate to the evaluating page with the instructor's id or name
        navigate(`/rating?instructorId=${instructor.id}`); // Pass the instructor ID as a query parameter
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">
                Select Instructor for Evaluation
            </Typography>
            <TextField
                label="Search by Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Grid container spacing={2}>
                {filteredInstructors.map(instructor => (
                    <Grid item xs={12} sm={6} md={4} key={instructor.id}>
                        <Card onClick={() => handleInstructorClick(instructor)} style={{ cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={instructor.image}
                                alt={instructor.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{instructor.name}</Typography>
                                <Rating
                                    name="read-only"
                                    value={instructor.rating}
                                    readOnly
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default InstructorSelectionPage;