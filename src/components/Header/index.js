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
import { LightMode, DarkMode} from '@mui/icons-material';
import "./Header.css";
import wheezyWaiterPic from '../../images/wheezy_iso_lg.png'

const drawerWidth = 240;
const navItems = ['Home', 'Contact'];

export default function Header({ toggleMode, mode }) {
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
            <AppBar elevation={trigger ? 4 : 0} sx={{ position: 'sticky', top: 0, display: 'flex', backgroundColor:'primary.main' }}>
                <Toolbar sx={{ 
                    height: {xs: 160, md: !trigger ? 300 : 160},
                    transition: trigger ? "0.3s ease-in" : "0.3s ease-out",
                    flexGrow: 1,
                    display:'flex',
                    pl:0,
                    
                }} style={{padding:0}}>
                    <IconButton xs={1}
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mx: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box xs={2} sm={3} sx={{ display: { xs: 'none', sm: 'block' }, height: '100%' }}>
                        <img src={wheezyWaiterPic} style={{ height: '100%' }} alt='Wheezy Waiter' />
                    </Box>
                    <Typography xs={6} variant="h4" style={{ textAlign: 'center' }} color='primary.contrastText' component="h1" sx={{ flexGrow: 1 }}>
                        WHEEZY WAITER
                        <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
                            I make videos.
                        </Typography>
                    </Typography>
                    <Grid2 container component='nav' md={2} spacing={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                        {navItems.map((item) => (
                            <Button key={item} md={12} lg={3} sx={{  m:1 }}>
                                {item}
                            </Button>
                        ))}
                        
                    </Grid2>
                    <IconButton xs={1} sx={{ ml: 3 }} onClick={() => toggleMode()} color="palette.primary.main">
                            {mode === true ? <LightMode /> : <DarkMode />}
                        </IconButton>
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