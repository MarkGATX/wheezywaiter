import * as React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import "./Header.css";
import wheezyWaiterPic from '../../images/wheezy_iso_lg.png'

const drawerWidth = 240;
const navItems = ['Home', 'Blog', 'Podcast', 'Contact'];

export default function Header({ currentPage, handlePageChange, props }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                WHEEZY
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;
    const container = document.querySelector('body');

    return (
        <>
            <AppBar elevation={trigger ? 4 : 0} sx={{ position: 'sticky', top: 0, display: 'flex' }}>
                <Toolbar sx={{
                    height: trigger ? 160 : 300,
                    transition: trigger ? "0.3s ease-in" : "0.3s ease-out",
                    flexGrow: 1,
                    display:'flex',
                    pl:0,
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box xs={3} sx={{ display: { xs: 'none', sm: 'block' }, height: '100%' }}>
                        <img src={wheezyWaiterPic} style={{ height: '100%' }} alt='Wheezy Waiter' />
                    </Box>
                    <Typography xs={4} variant="h4" style={{ textAlign: 'center' }} color='primary.contrastText' component="h1" sx={{ flexGrow: 1 }}>
                        WHEEZY WAITER
                        <Typography variant="h6" style={{ textAlign: 'center' }}>
                            I make videos.
                        </Typography>
                    </Typography>
                    <Grid2 container component='nav' md={4} spacing={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {navItems.map((item) => (
                            <Button key={item} md={12} lg={3} sx={{ color: '#fff', m:1 }}>
                                {item}
                            </Button>
                        ))}
                    </Grid2>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );

}