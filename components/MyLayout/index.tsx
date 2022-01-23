import { useState } from 'react';
// next
import Image from 'next/image';
// material ui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
// styles
import useStyles from './styles';

const MyLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { classes } = useStyles();
    const [sidebar, setSidebar] = useState<boolean>(false);
    return (
        <>
            <div className={classes.navContainer}>
                <Image src='/icons/flashCardsIcon.png' width="40px" height="40px" />
                <IconButton onClick={() => setSidebar(true)}><MenuIcon /></IconButton>
            </div>
            <main className={classes.mainContainer}>{children}</main>
            <Drawer
                anchor={"right"}
                open={sidebar}
                onClose={() => setSidebar(false)}
            >
                <Box sx={{ width: 300 }}>
                    <List>
                        <ListItem button key="profile">
                            <ListItemIcon><PermIdentityIcon /></ListItemIcon>
                            <ListItemText primary={"My Profile"} />
                        </ListItem>
                        <ListItem button key="home">
                            <ListItemIcon><GridViewIcon /></ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItem>
                        <ListItem button key="daily">
                            <ListItemIcon><TaskAltIcon /></ListItemIcon>
                            <ListItemText primary={"Daily Quest"} />
                        </ListItem>
                        <Divider />
                        <ListItem button key="logout">
                            <ListItemIcon><LogoutIcon /></ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default MyLayout;