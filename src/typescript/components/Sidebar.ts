import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Sidebar } from '../namespaces/Sidebar';

export default class SidebarComponent {
  oncreate () {
    console.log(`A Sidebar was created`);
  }
  _sidebarList (items: Array<Sidebar.sidebarItem>) {
    return items.map(function (item: Sidebar.sidebarItem) {
      return m('li', {class: 'sidebar-item', key:`${item.label}-item`}, [
          m('a', {href: `#!${item.link}`}, `${item.label}`)
      ])
    })
  }
  view (vnode: any) {
    return m('div', {class: 'sidebar-content'}, [
      m('ul', {class: 'sidebar-nav'}, [
        this._sidebarList(vnode.attrs.items)
      ])
    ])
  }
}
