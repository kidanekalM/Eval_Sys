import React, { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    FormControl,
    FormLabel,
    Slider,
    Button,
} from '@mui/material';

const EvaluatingPage = () => {
    const [evaluations, setEvaluations] = useState({
        attendance: 3,
        understanding: 3,
        engagement: 3,
    });

    const handleChange = (event, newValue) => {
        const { name } = event.target;
        setEvaluations((prev) => ({ ...prev, [name]: newValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Evaluations submitted:', evaluations);
        // Handle submission logic (e.g., send to server)
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">
                Evaluating Instructor
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    {['attendance', 'understanding', 'engagement'].map((criterion) => (
                        <Grid item xs={12} key={criterion}>
                            <Card>
                                <CardContent>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">
                                            {criterion.charAt(0).toUpperCase() + criterion.slice(1).replace(/_/g, ' ')}
                                        </FormLabel>
                                        <Slider
                                            name={criterion}
                                            value={evaluations[criterion]}
                                            onChange={handleChange}
                                            min={1}
                                            max={5}
                                            step={1}
                                            valueLabelDisplay="auto"
                                        />
                                    </FormControl>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            fullWidth>
                            Submit Evaluations
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default EvaluatingPage;