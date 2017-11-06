export namespace App {
  export const state = {
    mode: 'view'
  }
  export const sidebarItems = [
    { label: 'Home', link: '/home'},
    { label: 'About', link: '/about'},
    { label: 'Mithril', link: '/mithril'}
  ]
  export interface sidebarItem {
    label: String,
    link: String
  }
}
