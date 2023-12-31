// Props Types
// ###########
// Layout
export type LayoutPropsType = {
    children: React.ReactNode
}
// Providers
export type ProvidersPropsType = LayoutPropsType
// Header
export type HeaderPropsType = {
    onOpen: () => void
}
// Sidebar
export type SidebarPropsType = {
    isOpen: boolean,
    onClose: () => void
}
// Constants Types
// ###############
// Nav Link
export type NavLinkType = {
    page: string,
    href: string
}
// Nav Links
export type NavLinksType = Array< NavLinkType >
// Footer Link
export type FooterLinkType = {
    website: string,
    href: string
}
// Footer Links
export type FooterLinksType = Array< FooterLinkType >