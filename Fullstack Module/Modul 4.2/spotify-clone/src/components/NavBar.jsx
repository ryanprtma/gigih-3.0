import { Box, IconButton, FormControl, OutlinedInput } from '@mui/material';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateAfterIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';

import ProfileSection from './ProfileSection';

export function NavBar() {
    return (
        <Box>
            <Box sx={{ bgcolor: 'black', height: '8vh', width: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15, display: 'flex', flexDirection: 'row', p: 2, justifyContent: 'space-between' }} >
                <div>
                    <IconButton aria-label="delete" sx={{ color: 'white', justifyContent: 'flex-start' }}>
                        <NavigateBeforeIcon sx={{ fontSize: '3rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%' }} />
                    </IconButton>
                    <IconButton aria-label="delete" sx={{ color: 'white', justifyContent: 'flex-start' }}>
                        <NavigateAfterIcon sx={{ fontSize: '3rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%' }} />
                    </IconButton>
                    <FormControl sx={{ width: '50ch', borderColor: 'white' }} >
                        <OutlinedInput startAdornment={<SearchIcon />} placeholder="What do you want to listen to?" sx={{ borderRadius: 10, color: 'white' }} />
                    </FormControl>
                </div>
                <ProfileSection />
            </Box>
        </Box>
    );
}