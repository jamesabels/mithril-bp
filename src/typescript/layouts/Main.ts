import * as m from 'mithril';

export default class MainLayout {
  view (vnode: any) {
    return m("div.columns", vnode.attrs, [
      m('div.sidebar-wrap.column.col-3', [
        m('div.sidebar-content', [
          vnode.attrs.sidebar
        ])
      ]),
      m('div.main-wrap.column.col-9', [
        m('div.main-content', [
          vnode.attrs.main,
          vnode.children
        ])
      ])
    ])
  }
}
