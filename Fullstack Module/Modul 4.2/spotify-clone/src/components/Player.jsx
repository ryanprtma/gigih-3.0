import * as React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

import { Box, BottomNavigationAction, BottomNavigation, Paper, Slider } from '@mui/material';

export default function Player() {
    const [position, setPosition] = React.useState(32);
    const duration = 200; // seconds
    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '11vh', backgroundColor: 'black', p: 2 }} elevation={3}>
                <BottomNavigation
                    // showLlabels
                    // value={value}
                    onChange={(event, newValue) => {
                        // setValue(newValue);
                    }}
                    sx={{
                        backgroundColor: 'black',
                        color: 'white'
                    }}
                >
                    <BottomNavigationAction sx={{ color: 'white' }} icon={<ShuffleIcon sx={{ fontSize: '2rem' }} />} />
                    <BottomNavigationAction sx={{ color: 'white' }} icon={<SkipPreviousIcon sx={{ fontSize: '2rem' }} />} />
                    <BottomNavigationAction sx={{ color: 'white' }} icon={<PlayCircleIcon sx={{ fontSize: '3rem' }} />} />
                    <BottomNavigationAction sx={{ color: 'white' }} icon={<SkipNextIcon sx={{ fontSize: '2rem' }} />} />
                    <BottomNavigationAction sx={{ color: 'white' }} icon={<RepeatIcon sx={{ fontSize: '2rem' }} />} />

                </BottomNavigation>
                <BottomNavigation sx={{ backgroundColor: 'black' }}>
                    <Box sx={{ width: '35%' }}>
                        <Slider
                            aria-label="time-indicator"
                            size="small"
                            value={position}
                            min={0}
                            step={1}
                            max={duration}
                            onChange={(_, value) => setPosition(value)}
                            sx={{
                                color: 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                height: 4,
                                '& .MuiSlider-thumb': {
                                    width: 8,
                                    height: 8,
                                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                    '&:before': {
                                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                    },
                                    '&:hover, &.Mui-focusVisible': {
                                        boxShadow: 'rgb(0 0 0 / 16%)',
                                    },
                                    '&.Mui-active': {
                                        width: 20,
                                        height: 20,
                                    },
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 0.28,
                                },
                            }}
                        />
                    </Box>
                </BottomNavigation>
            </Paper >
        </>
    )
}