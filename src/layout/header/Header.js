import { AppBar, CssBaseline, IconButton, Typography, Box, Button, Toolbar, Drawer, ListItem, ListItemButton, Divider, List } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import ListItemText from '@mui/material/ListItemText';

const Header = (props) => {
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Tech Network', 'Blog', 'Contact'];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ my: 2, marginLeft: 2 }}>
                Logo
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'Left' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{color: 'white'}}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Logo
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
        </>
    )
}

export default Header


// import React from 'react'
// import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem, Button, Link, MenuIcon} from '@mui/material'
// import Box from '@mui/material/Box';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

// const pages = [

//     { label: 'Home', path: '/' },
//     { label: 'About', path: '/affiliate' },
//     { label: 'Tech Network', path: '/technetwork' },
//     { label: 'Blog', path: '/blog' },
//     { label: 'Contact', path: '/contact' },
// ];

// const Header = () => {

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };
//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     return (
//         <AppBar position="static" sx={{ background: 'white' }}>
//             <Toolbar>
//                 <IconButton>
//                     {/* <AssignmentIndIcon /> */}
//                     <Typography>
//                         Logo
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page.label}
//                                 component={Link}
//                                 to={page.path}
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'white', display: 'block', fontFamily: '"Manrope", sans-serif' }}
//                             >
//                                 {page.label}
//                             </Button>
//                         ))}
//                     </Box>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >

//                             {pages.map((page) => (
//                                 <MenuItem key={page.label} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{page.label}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </IconButton>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Header