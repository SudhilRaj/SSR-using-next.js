import React, {createContext, useState} from "react";

export const DrawerContext = createContext();

export const DrawerProvider = (props) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return(
        //Provide all the context values
        <DrawerContext.Provider value={{openDrawer:openDrawer, toggleDrawer:toggleDrawer}}>
            {props.children}
        </DrawerContext.Provider>
    )
}