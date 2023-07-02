import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../Images/Logo.png"
import userVector from "../Images/userVector.png"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from 'react-router-dom';
import backgroundImg from "../Images/backgroundImg.png"
import { pairHashpack } from '../Blockchain/Connection';

const NavbarColor = "#CEE963"
const NavbarLinkColor = "#3D4917"
const NavbarFont = "Kaisei Opti"
const drawerWidth = 240;

const navItems = [
    { id: 1, label: 'About', path: 'about' },
    { id: 2, label: 'Faq', path: 'faq' },
    { id: 3, label: 'Contact', path: 'contact' },
    { id: 4, label: 'Blog', path: 'blog' },
];

function DrawerAppBar(props) {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [accountId, setAccountId] = React.useState(null); // State variable to store the accountId

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const connectWallet = async () => {
        const initData = await pairHashpack(); // Call the pairHashpack function to connect the wallet
        setAccountId(initData.accountId); // Update the accountId state variable with the connected accountId
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2,display:"flex",justifyContent:"center" }}>
                <img src={logo} alt="logo" style={{ width: "150px" }} onClick={() => navigate("/")} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.path)}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ background: NavbarColor, borderRadius: "none" }}>
                <Toolbar style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, }}
                    >
                        <MenuIcon sx={{ color: "#000000" }} />
                    </IconButton>
                    <Box
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        sx={{ display: { sm: 'none' } }}
                    >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {accountId ? ( // Check if accountId is available
                                <>
                                    <Button disabled variant="contained" startIcon={<AccountCircleIcon />} sx={{ textTransform: "capitalize", color: "#ffffff", fontFamily: NavbarFont, fontWeight: "500", fontSize: "16px" }}>
                                        {accountId}
                                    </Button>
                                   
                                </>
                            ) : (
                                <button style={{ background: "#3D4917", color: "#ffffff", borderRadius: "25px", fontFamily: NavbarFont }} className='btn' onClick={connectWallet}>Connect Wallet</button>
                            )}
                                 <div onClick={() => navigate("userProfile")} style={{ marginLeft: "10px", background: "#DEF7E3", width: "25px", height: "25px", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={userVector} alt="" style={{ width: "15px" }} />
                            </div>
                        </div>

                    </Box>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
                    >
                        <img src={logo} alt="logo" style={{ width: "200px", cursor: "pointer" }} onClick={() => navigate("/")} />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: "center", alignItems: "center" }}>
                        {navItems.map((item) => (
                            <Button key={item.id} onClick={() => navigate(item.path)} sx={{ textTransform: "capitalize", color: NavbarLinkColor, fontFamily: NavbarFont, fontWeight: "500", fontSize: "16px" }}>
                                {item.label}
                            </Button>
                            
                        ))}
                        {accountId ? ( // Check if accountId is available
                            <>
                                <Button disabled variant="contained" startIcon={<AccountCircleIcon />} sx={{ textTransform: "capitalize", color: NavbarLinkColor, fontFamily: NavbarFont, fontWeight: "500", fontSize: "16px" }}>
                                    {accountId}
                                </Button>
                                
                            </>
                        ) : (
                            <button style={{ background: "#3D4917", color: "#ffffff", borderRadius: "25px", fontFamily: NavbarFont }} className='btn' onClick={connectWallet}>Connect Wallet</button>
                        )}
                           <div onClick={() => navigate("userProfile")} style={{ cursor: "pointer", marginLeft: "10px", background: "#DEF7E3", width: "25px", height: "25px", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={userVector} alt="" style={{ width: "15px" }} />
                        </div>
                    </Box>
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 0 }}>
                <Toolbar />
                {
                    props.outlet && props.outlet
                }
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
