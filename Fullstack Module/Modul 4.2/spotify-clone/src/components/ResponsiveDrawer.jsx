import * as React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, IconButton, Typography } from '@mui/material';

export function ResponsiveDrawer() {
    const drawer = (
        <div >
            <Box sx={{ p: 1, backgroundColor: 'black' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'hsl(0deg 0% 7.06%)', width: '100%', p: 2, borderRadius: 5 }}>
                    <Button startIcon={<IconButton aria-label="delete" sx={{ color: 'white' }}>
                        <HomeIcon />
                    </IconButton>} sx={{ color: 'white', justifyContent: 'flex-start', p: 1 }}>
                        Home
                    </Button>
                    <Button startIcon={<IconButton aria-label="delete" sx={{ color: 'white' }}>
                        <SearchIcon />
                    </IconButton>} sx={{ color: 'white', justifyContent: 'flex-start', p: 1 }}>
                        Search
                    </Button>
                </Box>
            </Box>
            <Box sx={{ p: 1, backgroundColor: 'black' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'hsl(0deg 0% 7.06%)', width: '100%', p: 5, borderRadius: 5 }}>
                    <Typography variant='h6' color='white' align='left'>
                        <strong>
                            My Playlist
                        </strong>
                    </Typography>
                </Box>
            </Box>
        </div >
    );

    return (
        <>
            {drawer}
        </>
    );
}