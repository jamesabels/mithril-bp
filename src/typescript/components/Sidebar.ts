import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Sidebar } from '../namespaces/Sidebar';

export default class SidebarComponent {
  _sidebarList (items: Array<Sidebar.sidebarItem>) {
    return items.map(function (item: Sidebar.sidebarItem) {
      return m('li.nav-item', {key:`${item.label}-item`}, [
          m('a', {href: `#!${item.link}`}, `${item.label}`)
      ])
    })
  }
  view (vnode: any) {
    return [
        m('div.sidebar-wrap.column.col-3.panel', [
            m('div.panel-header', [
              vnode.attrs.title
            ]),
            m('div.sidebar-content.panel-body', [
                m('ul.nav', [ this._sidebarList(vnode.attrs.items) ])
            ]),
            m('div.panel-footer.columns', [
                m('a.btn.btn-primary.column', {href: '#!/about'}, [
                    m('i.icon.icon-people')
                ]),
                m('a.btn.btn-primary.ml-2.column', {href: '#!/about'}, [
                    m('i.icon.icon-shutdown')
                ])
            ])
        ])
    ]
  }
}
