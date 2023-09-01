// Client Component
"use client";
// Imports
import { Button, Flex } from "@/components/chakra/Chakra";
import LightMoon from "../icons/LightMoon";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import DarkSun from "../icons/DarkSun";
import { useState } from "react";
import styles from "@/styles/layout/header.module.css";
// Switch Component
const Switch = () => {
    // Active Mode
    const [ mode, setMode ] = useState( true );
    // Active Switch Background
    const [ background, setBackground ] = useState( "primary" );
    // Active Icons
    const [ icons, setIcons ] = useState( [ <DarkSun />, <Moon /> ] );
    // Toggle Event
    const handleToggle = () => {
        // If Mode Is Light ( TRUE ), SET Mode To False And Change Active Icons And Background
        if ( mode ) { 
            setMode( false ); 
            setBackground( "secondary" );
            setIcons( [ <Sun />, <LightMoon /> ] ) 
        }
        // Else, Set Mode To True And Change Active Icons And Background
        else { 
            setMode( true ); 
            setBackground( "primary" ); 
            setIcons( [ <DarkSun />, <Moon /> ] ) 
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