// Client Component
"use client";
// Imports
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import { useDisclosure } from "@chakra-ui/react";
import { LayoutPropsType } from "./types";
// Layout Component
const Layout = ( { children }: LayoutPropsType ) => {
    // Drawer Hooks
    const { isOpen, onOpen, onClose } = useDisclosure();
    // Return JSX Elements
    return (
        <>
            <Header onOpen={ onOpen } />
            <Sidebar isOpen={ isOpen } onClose={ onClose } />
            { children }
            <Footer />
        </>
    )
}
// Exports
export default Layout;