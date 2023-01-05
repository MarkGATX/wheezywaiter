
import * as React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./Header.css";


export default function Header({ currentPage, handlePageChange }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return (
        <>
            <CssBaseline />
                <AppBar elevation= {trigger ? 4 : 0} sx={{
                    elevation: trigger ? 4 : 0,
                    position: 'sticky', paddingTop: trigger ? 10 : 20,
                    paddingBottom: trigger ? 10 : 20,
                    transition: trigger ? "0.3s ease-in" : "0.3s ease-out"
                }}>
                    <Toolbar >
                        <Typography variant="h6" component="div">
                            Scroll to elevate App bar
                        </Typography>
                    </Toolbar>
                </AppBar>
            <Container sx={{ position: 'relative' }}>
                <Box sx={{ my: 2 }}>
                    {[...new Array(24)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </>
    );

}