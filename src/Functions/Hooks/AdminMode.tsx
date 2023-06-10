import React, {createContext, useContext, useState} from "react";
import {Box} from "@mui/material";

const AdminContext = createContext({isAdmin: false})

export default function useAdmin() {
    return useContext(AdminContext)
}

export function AdminProvider(props:{children:React.ReactNode}) {
    const [enabled, setEnabled] = useState(false)

    return <AdminContext.Provider value={{isAdmin: enabled}}>
        <Box sx={{position: "absolute", bottom: 0, right: 0, height: "30px", width: "30px"}} onClick={() => setEnabled(true)}>
        </Box>
        {props.children}
    </AdminContext.Provider>
}
