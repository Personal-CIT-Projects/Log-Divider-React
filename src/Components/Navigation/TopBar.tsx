import {AppBar, Toolbar, Typography} from "@mui/material";
import LeftDrawer, {useDrawer} from "./LeftDrawer";

export default function TopBar() {
    return <AppBar position="static">
        <Toolbar variant="dense">
            <LeftDrawer />
            <StartDrawer />
            <Typography variant="h6" color="inherit" component="div">
                CITLogs Divider
            </Typography>
        </Toolbar>
    </AppBar>
}

function StartDrawer() {
    const drawer = useDrawer()
    console.log('Drawer status: '+ drawer.isOpen)
    return <></>
}
