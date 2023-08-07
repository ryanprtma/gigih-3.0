import { Box, Grid, Typography } from '@mui/material';

import MediaControlCard from './MediaControlCard';

export const RandomPlaylists = (props) => {
    const data = props.data;

    return (
        <>
            <Box sx={{ paddingTop: 2, paddingRight: 4, paddingLeft: 4, paddingBottom: 4, backgroundColor: 'hsl(0deg 0% 7.06%)' }}>
                <Box sx={{ paddingTop: 0, paddingRight: 2, paddingLeft: 0, paddingBottom: 2, display: 'flex' }}>
                    <Typography variant='h3' color='white' sx={{ justifyContent: 'flex-start' }}>
                        <strong>
                            Good Morning
                        </strong>
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        data.map((value, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <MediaControlCard playlistName={value.playlistName} imageUrl={value.imageUrl} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
}