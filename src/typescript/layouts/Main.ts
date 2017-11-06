import * as m from 'mithril';

export default class MainLayout {
  view (vnode: any) {
    return m("div", vnode.attrs, [
      m('div', { class: 'sidebar-wrap'}, [
        m('div', {class: 'sidebar-content'}, [
          vnode.attrs.sidebar
        ])
      ]),
      m('div', {class: 'main-wrap'}, [
        m('div', {class: 'main-content'}, [
          vnode.attrs.main,
          vnode.children
        ])
      ])
    ])
  }
}
