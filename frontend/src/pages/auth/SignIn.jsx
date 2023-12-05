import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import itLocale from 'i18n-iso-countries/langs/it.json'
import { FormControl, MenuItem, Select } from '@mui/material';

import { Us } from "react-flags-select";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

// Have t oregister the languages you want to use



function SignInSide() {

    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);
    const countryObj = countries.getNames('en', {select: 'official'})
    const countryArr = Object.entries(countryObj).map(([key, value])=> {
        return {
            label: value,
            value: key
        };
    });

    const [selectedCountry, setSelectedCountry] = useState('')

    const selectCountryHandler = (value) => {
        setSelectedCountry(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
       <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={false} sm={4} md={6}
            sx={{
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} >
            <AppBar position="static" color="transparent" elevation={1} sx={{boxShadow: 'none'}} >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
                        Enerjeet
                    </Typography>
                </Toolbar>
            </AppBar> 
            <Box sx={{ml: 4, position: 'fixed', bottom: 0}}>
                <Box sx={{my: 5}}>
                    <Typography variant="h6" color="yellow" noWrap sx={{ flexGrow: 1 }}>
                        Recieve Grant Support
                    </Typography>
                    <Typography component="span" color="white" noWrap sx={{ flexGrow: 1 }}>
                        TRBITAK 1512 Green Call
                    </Typography>
                </Box>
                <Box sx={{my: 5}}>
                    <Typography variant="h6" color="yellow" noWrap sx={{ flexGrow: 1 }}>
                        Most Valuable Pre-Incubation Award
                    </Typography>
                    <Typography component="span" color="white" noWrap sx={{ flexGrow: 1 }}>
                        Teknopark lzmir High Technology Awards
                    </Typography>
                </Box>
                <Box sx={{my: 5}}>
                    <Typography variant="h6" color="yellow" noWrap sx={{ flexGrow: 1 }}>
                        1st Place Award
                    </Typography>
                    <Typography component="span" color="white" noWrap sx={{ flexGrow: 1 }}>
                        Best For Energy / Best For Wind Ideathon
                    </Typography>
                </Box>
                <Box sx={{my: 5}}>
                    <Typography variant="h6" color="yellow" noWrap sx={{ flexGrow: 1 }}>
                        3rd Place Award
                    </Typography>
                    <Typography component="span" color="white" noWrap sx={{ flexGrow: 1 }}>
                        Ege Genc is Adamian Dernegi / EGIAD Ideathon
                    </Typography>
                </Box>
            </Box>            
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
            <AppBar position="static" color="transparent" elevation={1} sx={{boxShadow: 'none'}} >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    </Typography>
                    <nav>
                        <Link variant="button" color="text.primary" href="#"
                            sx={{ my: 1, mx: 1.5 }} >
                            Join Vendor List
                        </Link>
                        <Link variant="button" color="text.primary" href="#"
                            sx={{ my: 1, mx: 1.5 }} >
                            Craeate an Account
                        </Link>                        
                    </nav>
                    <FormControl sx={{minWidth: 220}} size='small'>
                            <Select labelId="countrySelect" value={selectedCountry} 
                                onChange={(e) => selectCountryHandler(e.target.value)}>
                                {
                                    !!countryArr?.length &&
                                    countryArr.map(country => (
                                        <MenuItem key={country.value} value={country.value}>
                                           <Us />&nbsp;United States
                                           {/* <Typography variant="inherit">&nbsp;Afghanistan</Typography> */}
                                           {/* <Typography variant="inherit">&nbsp;United States</Typography> */}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>           
            <Box sx={{ my: 10, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'none'}} >
                <Grid container component="div">
                    <Grid item sm={4} md={3}></Grid>
                    <Grid item sm={4} md={6}>
                        <Box sx={{ my: 8, mx: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',}} >
                            <Typography component="h1" variant="h6" fontWeight="fontWeightBold"> Sign in </Typography>
                            <Typography component="span">Enter yuor email and password below</Typography>

                            <Box component="form" noValidate onSubmit={handleSubmit} 
                                sx={{ mt: 1, alignItems: 'center'}}>
                                <TextField margin="normal" required fullWidth id="email" label="Email Address"
                                    name="email" autoComplete="email" autoFocus />
                                <TextField margin="normal" required fullWidth name="password" label="Password"
                                    type="password" id="password" autoComplete="current-password" />
                                <Button type="submit" fullWidth variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor:'black' }} >
                                    Sign In With Email
                                </Button>
                                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}} >
                                    <Typography component="span">
                                        By clicking continue, you agree 
                                    </Typography>
                                    <Typography component="span">
                                        to our <Link href="#" variant='body2'> Terms of Service </Link> and
                                    </Typography>
                                    <Typography component="span">
                                        <Link href="#" variant='body2'> Privacy Policy.</Link>
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={4} md={3}></Grid>
                </Grid>    
                
                
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide