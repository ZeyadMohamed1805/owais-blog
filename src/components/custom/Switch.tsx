// Client Component
"use client";
// Imports
import { Button, Flex } from "@/components/chakra/Chakra";
import LightMoon from "../icons/LightMoon";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import DarkSun from "../icons/DarkSun";
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import styles from "@/styles/layout/header.module.css";
// Switch Component
const Switch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    // Active Switch Background
    const [ background, setBackground ] = useState( colorMode === "light" ? "primary" : "secondary" );
    // Active Icons
    const [ icons, setIcons ] = useState( colorMode === "light" ? [ <DarkSun key={ "dark_sun" } />, <Moon key={ "moon" } /> ] : [ <Sun key={ "sun" } />, <LightMoon key={ "light_moon" } /> ] );
    // Toggle Event
    const handleToggle = () => {
        // If Mode Is Light ( TRUE ), SET Mode To False And Change Active Icons And Background
        if ( colorMode === "light" ) { 
            setBackground( "secondary" );
            setIcons( [ <Sun key={ "sun" } />, <LightMoon key={ "light_moon" } /> ] );
            toggleColorMode();
        }
        // Else, Set Mode To True And Change Active Icons And Background
        else { 
            setBackground( "primary" ); 
            setIcons( [ <DarkSun key={ "dark_sun" } />, <Moon key={ "moon" } /> ] ) ;
            toggleColorMode();
        }
    }
    // Return JSX Elements
    return (
        <Button className={ styles.switch } sx={{ background: background, _hover: { opacity: 0.75 } }} onClick={ handleToggle }>
            <Flex className={ styles.switchContent }>
                { ...icons }
            </Flex>
        </Button>
    )
}

export default Switch;