import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Model
const state: any = {
  title: null,
}

// View
export default class MainComponent {
  oninit (vnode: any) {
    state.title = vnode.attrs.title;
    console.log('Users', vnode.attrs.users);
  }
   _renderUsers (users: any) {
    return users.map(function (user: any) {
        return (
            m('div.user-wrap.row', [
                m('h3.col-2', `Username:`),
                m('p.col-10', `${user.username}`)
            ])
        )
    })
  }
  view (vnode: any) {
    return [
      m('h1', vnode.attrs.title),
      this._renderUsers(vnode.attrs.users)
    ]
  }
}
