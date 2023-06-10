import {Divider, IconButton, ListItem, List, SwipeableDrawer, Typography} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MenuIcon from '@mui/icons-material/Menu';
import React, {createContext, useContext} from "react";
import {Link} from "react-router-dom";

import AgricultureIcon from '@mui/icons-material/Agriculture';
import {HouseRounded} from "@material-ui/icons";
import {AdminPanelSettings} from "@mui/icons-material";
import TranslateIcon from '@mui/icons-material/Translate';
import useAdmin from "../../Functions/Hooks/AdminMode";

const DrawerContext = createContext<{ toggle: () => void; isOpen: boolean }>({
    toggle: () => {
    },
    isOpen: false
})

export function useDrawer() {
    return useContext(DrawerContext)
}

export default function LeftDrawer() {
    const [state, setState] = React.useState(false);
    const {isAdmin} = useAdmin()

    return (
        <DrawerContext.Provider value={{
            toggle: () => setState(!state),
            isOpen: state
        }}>
            <IconButton onClick={() => setState(true)} sx={{color: "white", mr: 2}}>
                <MenuIcon/>
            </IconButton>
            <SwipeableDrawer
                anchor={"left"}
                open={state}
                onClose={() => setState(false)}
                onOpen={() => setState(true)}
            >
                <>
                    <Typography variant={"h5"} sx={{fontWeight: "bold", textAlign: "center", p: 2, color: "grey"}}>
                        Menu
                    </Typography>
                    <Divider/>
                    <List>
                        <DetailedListItem title={"Home"} to={"/Home"}>
                            <HouseRounded/>
                        </DetailedListItem>
                        <Divider/>
                        <DetailedListItem title={"Account Divider"} to={"/Parser/Account"}>
                            <AccessibilityIcon/>
                        </DetailedListItem>
                        <Divider/>
                        <DetailedListItem title={"SO Application"} to={"/Parser/SO/Application"}>
                            <ArchitectureRoundedIcon/>
                        </DetailedListItem>
                        <DetailedListItem title={"SO Review"} to={"/Parser/SO/Review"}>
                            <AgricultureIcon/>
                        </DetailedListItem>
                        <Divider/>
                        <DetailedListItem title={"CB Application"} to={"/Parser/CB/Application"}>
                            <ArchitectureRoundedIcon/>
                        </DetailedListItem>
                        <DetailedListItem title={"CB Review"} to={"/Parser/CB/Review"}>
                            <DirectionsRunIcon/>
                        </DetailedListItem>
                        <Divider/>
                        <DetailedListItem title={"Guider App Review"} to={"/Parser/Guiders/Application"}>
                            <AddReactionRoundedIcon/>
                        </DetailedListItem>
                        <DetailedListItem title={"Guider Review"} to={"/Parser/Guiders/Review"}>
                            <SupportAgentRoundedIcon/>
                        </DetailedListItem>
                        <Divider/>
                        <DetailedListItem title={"Translator Review"} to={"/Parser/Translators/Review"}>
                            <TranslateIcon/>
                        </DetailedListItem>
                        {
                            isAdmin && (
                                <>
                                    <Divider/>
                                    <DetailedListItem title={"Admin Review"} to={"/Parser/Admin"}>
                                        <AdminPanelSettings/>
                                    </DetailedListItem>
                                    <DetailedListItem title={"Admin Application"} to={"/Parser/Admin/Application"}>
                                        <AdminPanelSettings/>
                                    </DetailedListItem>
                                </>
                            )
                        }
                    </List>
                </>
            </SwipeableDrawer>
        </DrawerContext.Provider>
    );
}

function DetailedListItem({to, children, title}: { to: string, title: string, children?: JSX.Element }) {
    return (
        <ListItem button component={Link} to={to}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={title}/>
        </ListItem>
    )
}
