import { Box, Button, Avatar } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function ProfileSection() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-heavenly' }}>
            <Button sx={{ color: 'black', borderRadius: 5, backgroundColor: 'white', paddingRight: 3, paddingLeft: 3 }}><strong>Explore premium</strong></Button>

            <Button startIcon={
                <ArrowCircleDownIcon />
            } sx={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 5, paddingRight: 3, paddingLeft: 3, marginLeft: 1 }}>
                Install App
            </Button>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ marginLeft: 1 }} />
        </Box>
    )
}

