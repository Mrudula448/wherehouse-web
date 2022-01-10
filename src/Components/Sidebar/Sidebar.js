import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {connect} from "react-redux";

const drawerWidth = 240;

const menuItems = [
    {
        text: 'Sample',
        id: 'company',
        icon: <InboxIcon/>,
        to: '/company'
    },
    {
        text: 'Company1',
        id: 'company1',
        icon: <MailIcon/>,
        to: '/company1'
    },

]

const Sidebar =  ({showSideBar}) =>{
    console.log(showSideBar);
    if(showSideBar){
        return(
            <>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper `]: {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            border: 'none',
                            boxShadow: 'var(--box-shadow-aside)',
                            borderRadius: '0 0.75rem 0.75rem 0'
                        },
                    }}
                >
                    <Toolbar/>
                    <Box sx={{overflow: 'auto'}}>
                        <List>
                            {menuItems.map((item, i) => {
                                return (
                                    <ListItem component={Link} to={item.to}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text}/>
                                    </ListItem>
                                )

                            })}

                        </List>
                    </Box>
                </Drawer>
            </>
        )
    }
    else{
        return (
            <></>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        showSideBar: state.Settings.sideNavStatus
    }
};


export default connect(mapStateToProps)(Sidebar)
