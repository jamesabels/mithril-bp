import * as m from 'mithril';

// View
export default class LoginComponent {
    view (vnode: any) {
        return [
            m('div.header-wrap.p-2', [
                m('h1.m-2', 'Settings')
            ])
        ];
    }
}
