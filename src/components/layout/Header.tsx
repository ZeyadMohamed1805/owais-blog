// Imports
import { Flex, Button, Heading } from "@/components/chakra/Chakra";
import Switch from "../custom/Switch";
import Menu from "../icons/Menu";
import Link from "next/link";
import { navLinks } from "@/utils/constants";
import styles from "@/styles/layout/header.module.css";
// Header Component
const Header = ( { onOpen }: any ) => {
    // Return JSX Elements
    return (
        <header className={ styles.header }>
            <Flex className={ styles.headerContainer }>
                <Heading variant={ "h3" }>
                    Zeyad Mohamed
                </Heading>
                <Flex className={ styles.headerLinks }>
                    {
                        navLinks.map( ( link, index ) => (
                            <Link key={ index } href={ link.href }>
                                { link.page }
                            </Link>
                        ) )
                    }
                    <Button variant={ "filled_cta" } className={ styles.headerCTA }>
                        New blog
                    </Button>
                    <Switch />
                </Flex>
                <Menu onOpen={ onOpen } />
            </Flex>
        </header>
    )
}
// Exports
export default Header;