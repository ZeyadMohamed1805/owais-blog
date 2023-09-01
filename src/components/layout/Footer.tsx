// Imports
import { Flex, Text } from "@/components/chakra/Chakra";
import Link from "next/link";
import { footerLinks } from "@/utils/constants";
import styles from "@/styles/layout/footer.module.css";
// Footer Component
const Footer = () => {
    // Return JSX Elements
    return (
        <footer className={ styles.footer }>
            <Flex className={ styles.footerContainer }>
                <Text className={ styles.footerText }>
                    &copy; 2023
                </Text>
                {
                    footerLinks.map( ( link, index ) => (
                        <Link key={ index } href={ link.href }>
                            { link.website }
                        </Link>
                    ) )
                }
            </Flex>
        </footer>
    )
}
// Exports
export default Footer;