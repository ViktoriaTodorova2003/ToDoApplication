import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';


const drawerWidth = 240;
const icons = [HomeRoundedIcon, BallotRoundedIcon, PublicRoundedIcon, InsertPhotoRoundedIcon];

export default function SideBar() {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth,
                    '@media (max-width: 600px)': {
                        width: '70vw',
                    },
                    '@media (max-width: 960px)': {
                        width: '30vw',
                    },
                },
            }}
            variant='permanent'
            anchor='left'
        > 
            <Toolbar />
            <Divider />
            <List>
                {[
                    { text: 'Home', path: '/' },
                    { text: 'My ToDos', path: '/mytodos' },
                    { text: 'Hello World', path: '/helloworld' },
                    { text: 'Picture', path: '/picture' },
   
                ].map(({ text, path }, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={Link} to={path}>
                            <ListItemIcon>
                            {React.createElement(icons[index % icons.length])}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
          </List>
        </Drawer>
    );
}