import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';

export function PlaylistsRecommendations() {
    return (
        <>
            <div>
                <Box sx={{ paddingTop: 0, paddingRight: 4, paddingLeft: 4, paddingBottom: 2, display: 'flex', backgroundColor: 'hsl(0deg 0% 9.41%)' }}>
                    <Typography variant='h4' color='white' sx={{ justifyContent: 'flex-start' }}>
                        <strong>
                            More What You Like!
                        </strong>
                    </Typography>
                </Box>
                <Box sx={{ bgcolor: 'hsl(0deg 0% 9.41%)', width: '100%', p: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5rem' }}>
                    <Grid container spacing={2}>
                        {
                            Array.from(Array(6)).map((_, index) => (
                                <Grid xs={2} >
                                    <Card keys={index} sx={{ maxWidth: 500, backgroundColor: 'hsl(0deg 0% 9.41%)', color: 'white' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                sx={{ p: 2, borderRadius: 6 }}
                                                component="img"
                                                height="auto"
                                                image={require('../assets/live-from-space.jpg')}
                                                alt="album image"
                                            />
                                            <CardContent sx={{ color: 'white', paddingTop: 0 }}>
                                                <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }} textAlign='left'>
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }} textAlign='left'>
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </div>
        </>
    )
}