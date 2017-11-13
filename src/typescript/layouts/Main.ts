import * as m from 'mithril';

export default class MainLayout {
  view (vnode: any) {
    return m("div.app.columns", vnode.attrs, [
      vnode.attrs.sidebar,
      m('div.main-wrap.column.col-9', [
        m('div.main-content', [
          vnode.attrs.main,
        ])
      ])
    ])
  }
}
