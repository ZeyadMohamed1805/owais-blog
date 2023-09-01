// Client Component
"use client";
// Imports
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import { ProvidersPropsType } from './types';
// Providers Component
const Providers = ( { children }: ProvidersPropsType ) => {
    // New Query Client
    const queryClient = new QueryClient();
    // Return JSX Elements
    return (
        <CacheProvider>
            <ChakraProvider theme={ theme }>
                <QueryClientProvider client={ queryClient }>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    { children }
                </QueryClientProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}
// Exports
export default Providers;