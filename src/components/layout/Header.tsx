// Imports
import { Flex, Button, Heading, HamburgerIcon, Icon } from "@/components/chakra/Chakra";
import Switch from "../custom/Switch";
import Link from "next/link";
import { navLinks } from "@/utils/constants";
import { HeaderPropsType } from "@/utils/types";
import styles from "@/styles/layout/header.module.css";
// Header Component
const Header = ( { onOpen }: HeaderPropsType ) => {
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
                <Icon as={ HamburgerIcon } onClick={ onOpen } className={ styles.menu } />
            </Flex>
        </header>
    )
}
// Exports
export default Header;