import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CompanySignup from "./CompanySignup";
import CustomerSignup from "./CustomerSignup";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div {...other}>
            {value === index &&
                <Box>{children}</Box>
            }
        </div>
    );
}

const CustomTabs = () => {
    const [value, setValue] = useState(0);


    const handleChange = ((e, newValue) => {
        setValue(newValue);
    })
    return (
        <>
        <Grid Container>
        <Tabs value={value} onChange={handleChange}>
                <Tab label="Sample" />
                <Tab label="Customer" />
            </Tabs>
        </Grid>

            <TabPanel value={value} index={0}>
                <CompanySignup/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CustomerSignup/>
            </TabPanel>
        </>
    )
}
export default CustomTabs
