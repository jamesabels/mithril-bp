import * as m from 'mithril';

// Import components
import ErrorToast from '../components/ErrorToast';

// Import namespaces
import { Api } from '../namespaces/Api';

export default class MainLayout {
  _renderError (verb: string, message: string) {
    if (Api.state.error.length > 0) {
      return m(ErrorToast, {verb, message})
    }
  }
  oninit () {
    Api.getUsers();
  }
  view (vnode: any) {
    if (Api.state.error.length > 0) {
      return m("div.app.columns", vnode.attrs, [
        this._renderError(
          Api.state.error[0].verb,
          Api.state.error[0].message
        ),
        vnode.attrs.sidebar,
        m('div.main-wrap.column.col-9', [
          m('div.main-content', [
            vnode.attrs.main,
          ])
        ])
      ])
    } else {
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
}
