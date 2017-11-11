export namespace Sidebar {
    export const state = {
        sidebarItems: [
            { label: 'Home', link: '/home'},
            { label: 'About', link: '/about'},
            { label: 'Mithril', link: '/mithril'}
        ]
    };
    export interface sidebarItem {
        label: String,
        link: String
    }
}
