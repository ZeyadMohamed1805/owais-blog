// Imports
import { extendTheme } from "@chakra-ui/react";
// Add Custom Values
const theme = extendTheme( {
    // Add Color Mode
    config: {
        initialColorMode: 'light',
        useSystemColorMode: true
    },
    // Custom Colors
    colors: {
        primary: "#FFFFFF",
        secondary: "#1A1A1A",
        call_to_action: "#7F56D9",
        accent_purple_light: "#F9F5FF",
        accent_purple_dark: "#6941C6",
        accent_blue_light: "#EEF4FF",
        accent_blue_dark: "#3538CD",
        accent_red_light: "#FDF2FA",
        accent_red_dark: "#C11574",
        accent_orange_light: "#FFF6ED",
        accent_orange_dark: "#C4320A",
        accent_green_light: "#ECFDF3",
        accent_green_regular: "#21D188",
        accent_green_dark: "#027A48",
        accent_gray_light: "#F8F9FC",
        accent_gray_regular: "#667085",
        accent_gray_dark: "#363F72",
    },
    // Custom Components
    components: {
        Heading: {
            variants: {
                h1: { fontSize: "36px" },
                h2: { fontSize: "24px" },
                h3: { fontSize: "18px" },
            }
        },
        Text: {
            baseStyle: { fontSize: "16px" }
        },
        Button: {
            variants: {
                filled_cta: {
                    backgroundColor: "call_to_action",
                    color: "primary",
                    fontWeight: "medium",
                    transitionDuration: "0.25s"
                }
            }
        }
    }
 } );
// Exports
export default theme;