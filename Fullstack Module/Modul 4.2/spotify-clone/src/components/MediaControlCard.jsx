import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function MediaControlCard({ playlistName, imageUrl }) {
    return (
        <Card sx={{ display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <CardMedia
                component="img"
                sx={{ width: 100, backgroundColor: 'red', 'boxShadow': '5px 0px 10px rgba(0, 0, 0, 0.3)' }}
                image={require(`../assets/${imageUrl}`)}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'tranparent' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6" color='white'>
                        {playlistName}
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}
