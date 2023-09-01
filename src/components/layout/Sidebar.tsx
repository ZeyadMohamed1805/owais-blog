// Client Component
"use client";
// Imports
import Link from "next/link";
import Switch from "../custom/Switch";
import { Flex, Button, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@/components/chakra/Chakra";
import { navLinks } from "@/utils/constants";
import styles from "@/styles/layout/header.module.css";
// Sidebar Component
const Sidebar = ( { isOpen, onClose }: any ) => {
    // Return JSX ELements
    return (
        <Drawer isOpen={ isOpen } onClose={ onClose }>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    THE BLOG
                </DrawerHeader>
                <DrawerBody>
                    <Flex className={ styles.sidebarLinks }>
                        {
                            navLinks.map( ( link, index ) => (
                                <Link key={ index } href={ link.href }>
                                    { link.page }
                                </Link>
                            ) )
                        }
                    </Flex>
                </DrawerBody>
                <DrawerFooter>
                    <Flex className={ styles.sidebarButtons }>
                        <Button variant={ "filled_cta" } className={ styles.headerCTA }>
                            New blog
                        </Button>
                        <Switch />
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
// Exports
export default Sidebar;