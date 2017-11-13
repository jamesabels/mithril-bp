export namespace Sidebar {
    export const state = {
        sidebarItems: [
            { label: 'Home', link: '/home'},
        ]
    };
    export interface sidebarItem {
        label: String,
        link: String
    }
}
