import './index.scss'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import turboutique from '../../assets/images/turboutique.net.png';
import wkdayscheduler from '../../assets/images/wkdaysched.png'
import carpointment from '../../assets/images/carpointment.png';

function Copyright() {
    return (
        <Typography variant="body1" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/KimTurboutique">
                Kimberly R. Dev
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [
    {
        id: 1,
        image: 'carpointment',
        heading: 'Carpointment App',
        content: 'Under Development 🚧 👷🏾‍♀️',
        github: 'https://github.com/KimTurboutique/Carpointment_App'
    },
    {
        id: 2,
        image: turboutique,
        heading: 'Turboutique.net',
        content: 'An E-commerce auto parts store for new & used auto parts.',
        live: 'https://turboutique.net'
    },
    {
        id: 3,
        image: wkdayscheduler,
        heading: 'Work Day Scheduler',
        content: 'Schedule your workday in a simple way!',
        live:'https://kimturboutique.github.io/WorkDay_Scheduler/',
        github: 'https://github.com/KimTurboutique/WorkDay_Scheduler'
    }];

const customTheme = createTheme({
    palette: {
        background: {
            default: '#974EDE',
        },
    },
});

export default function Album() {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '50vh',
                    bgcolor: 'background.default',
                    ml: {xs: '120px', sm: '120px' }           
                }}
            >
                <Container component="main" sx={{ py: 8 }}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{

                                            pt: '56.25%',
                                        }}
                                        image={card.image}
                                        />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h3" component="h5">
                                         {card.heading}
                                        </Typography>
                                        <Typography variant="h5">
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a href={card.live} target="_blank" rel="noreferrer"><Button size="small" variant="h1">View Live</Button></a>
                                        <a href={card.github} target="_blank" rel="noreferrer"><Button size="small" variant="h1">Source Code</Button></a>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            {/* Footer */}
            <Box sx={{ bgcolor: '#974EDE', p: 10 }} component="footer">
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}