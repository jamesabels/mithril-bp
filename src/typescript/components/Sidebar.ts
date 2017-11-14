import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Interfaces
interface sidebarItem {
    label: String,
    link: String
}

// Model
const state = {
    sidebarItems: [
        { label: 'Home', link: '/'},
        { label: 'Settings', link: '/settings'}
    ]
};

// View
export default class SidebarComponent {
  _sidebarList (items: Array<sidebarItem>) {
    return items.map(function (item: sidebarItem) {
      return m('li.nav-item', {key:`${item.label}-item`}, [
          m('a', {href: `#!${item.link}`}, `${item.label}`)
      ])
    })
  }
  view (vnode: any) {
    return [
        m('div.column.col-3.panel', {style:{background: 'whitesmoke'}} , [
            m('div.panel-header', [
              vnode.attrs.title
            ]),
            m('div.panel-body', [
                m('ul.nav', [ this._sidebarList(state.sidebarItems) ])
            ]),
            m('div.panel-footer.columns', [
                m('a.btn.btn-primary.column', {href: '#!/'}, [
                    m('i.icon.icon-people')
                ]),
                m('a.btn.btn-primary.ml-2.column', {href: '#!/settings'}, [
                    m('i.icon.icon-shutdown')
                ])
            ])
        ])
    ]
  }
}
