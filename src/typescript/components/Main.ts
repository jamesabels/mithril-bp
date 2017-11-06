import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Model
const state: any = {
  title: null,
}

// View
export default class Main {
  oncreate (vnode: any) {
    state.title = vnode.attrs.title;
  }
  view (vnode: any) {
    return [
      m('h1', vnode.attrs.title)
    ]
  }
}
