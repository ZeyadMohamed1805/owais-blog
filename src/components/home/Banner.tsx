"use client";
// Imports
import Image from "next/image";
import { Box } from "@/components/chakra/Chakra";
import { useColorMode } from "@chakra-ui/react";
import styles from "@/styles/home/banner.module.css";
// Banner Component
const Banner = () => {
    // Destruct Color Mode
    const { colorMode } = useColorMode();
    // Return JSX Elements
    return (
        <section className={ styles.banner }>
            <Box className={ styles.bannerContainer }>
                <Image className={ styles.bannerImage } src={ colorMode === "light" ? "/images/banner.svg" : "/images/dark-banner.svg" } width={ 250 } height={ 300 } alt={ "The Blog" } />
            </Box>
        </section>
    )
}
// Exports
export default Banner