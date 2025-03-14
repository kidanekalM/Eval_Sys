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
    // Initial state with evaluation categories and their criteria
    const [evaluations, setEvaluations] = useState({
        courseOrganization: [3, 3, 3, 3, 3],
        subjectKnowledge: [3, 3, 3],
        teachingMethods: [3, 3, 3, 3],
        studentInvolvement: [3, 3, 3],
        evaluationMethods: [3, 3, 3, 3],
        personalityTraits: [3, 3, 3, 3, 3],
        availabilityAndSupport: [3, 3, 3, 3],
    });

    const handleChange = (category, index, value) => {
        setEvaluations((prev) => ({
            ...prev,
            [category]: prev[category].map((item, i) => (i === index ? value : item)),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Evaluations submitted:', evaluations);
        // Handle submission logic (e.g., send to server)
    };

    const evaluationCategories = [
        {
            title: 'Course Organization',
            criteria: [
                'Presented and clarified the course objectives',
                'Suggested reference materials for the course',
                'Provided the course outline at the beginning of term',
                'Covered course contents according to the course outline',
                'Motivated students to use reference materials of the course',
            ],
            key: 'courseOrganization',
        },
        {
            title: 'Knowledge of the Subject Matter',
            criteria: [
                'Organized and presented the subject matter well',
                'Explained concepts and clarified areas of confusion',
                'Introduced concepts with clear and practical examples',
            ],
            key: 'subjectKnowledge',
        },
        {
            title: 'Teaching Methods',
            criteria: [
                'Presented the subject matter clearly in the language of instruction (English)',
                'Applied different teaching strategies and methods to make students active in the class',
                'Managed class time effectively for teaching and/or discussion purpose',
                'Provided related homework and/or assignments for course work',
            ],
            key: 'teachingMethods',
        },
        {
            title: 'Student Involvement',
            criteria: [
                'Offered students with chances to share their ideas and knowledge',
                'Encouraged students to ask and/or answer questions in the class',
                'Listened to students\' academic/social problems willingly',
            ],
            key: 'studentInvolvement',
        },
        {
            title: 'Evaluation Methods',
            criteria: [
                'Assessed/evaluated students based on the weight stated on the course outline',
                'Allowed reasonable time for tests, assignments or mid semester exams',
                'Was transparent in marking tests and/or assignments with clear standards',
                'Provided feedback on homework, assignments, tests, and/or exam papers on time',
            ],
            key: 'evaluationMethods',
        },
        {
            title: 'Personality Traits',
            criteria: [
                'Presented the course enjoyably/lively in the class',
                'Behaved properly in the classroom',
                'Had a good way of dressing code (e.g. wearing gown)',
                'Had the ability to maintain classroom discipline properly',
                'Showed respect and concern for students',
            ],
            key: 'personalityTraits',
        },
        {
            title: 'Availability and Support',
            criteria: [
                'Attended classes regularly',
                'Was punctual for classes',
                'Was available for consultation outside of class',
                'Arranged make-up classes for missed sessions (if there are any)',
            ],
            key: 'availabilityAndSupport',
        },
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">
                Instructor Evaluation Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    {evaluationCategories.map((category) => (
                        <Grid item xs={12} key={category.key}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {category.title}
                                    </Typography>
                                    {category.criteria.map((criterion, index) => (
                                        <FormControl key={index} component="fieldset" fullWidth margin="normal">
                                            <FormLabel component="legend">{criterion}</FormLabel>
                                            <Slider
                                                value={evaluations[category.key][index]}
                                                onChange={(e, value) =>
                                                    handleChange(category.key, index, value)
                                                }
                                                min={1}
                                                max={5}
                                                step={1}
                                                valueLabelDisplay="auto"
                                            />
                                        </FormControl>
                                    ))}
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
