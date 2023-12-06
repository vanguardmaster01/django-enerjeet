import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CssBaseline from '@mui/material/CssBaseline';

const defaultTheme = createTheme();

function Calculator(){
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Typography component="h1" variant='h6' noWrap sx={{flexGrow: 1}}>
                            Calculator
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
            </Box>
        </ThemeProvider>
    )
}

export default Calculator