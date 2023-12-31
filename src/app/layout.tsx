// Imports
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import Providers from '@/utils/Providers';
import Layout from '@/utils/Layouts';
import { LayoutPropsType } from '@/utils/types';
// MetaData
export const metadata: Metadata = {
    title: 'The Blog | A Web Personal Blog',
    description: 'A Web Personal Blog',
}
// Default Font
const inter = Inter({ subsets: ['latin'] });
// Layout Component
const RootLayout = ( { children }: LayoutPropsType ) => {
    // Return JSX Elements
    return (
        <html lang="en">
            <body className={ inter.className }>
                <Providers>
                    <Layout>
                        { children }
                    </Layout>
                </Providers>
            </body>
        </html>
    )
}
// Exports
export default RootLayout;