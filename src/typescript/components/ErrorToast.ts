import * as m from 'mithril';

// Import namespaces 
import { Api } from '../namespaces/Api';

// View
export default class ErrorToast {
    _closeToast (e: any) {
        e.preventDefault();
        Api.state.error = [];
    }
    view (vnode: any) {
        return [
            m(`div.toast.toast-${vnode.attrs.verb}.fixed`, {style:{zIndex: '999'}}, [
                vnode.attrs.message,
                m('button.btn.btn-clear.float-right', {onclick: (e) => {this._closeToast(e)}})
            ])
        ]
    }
}
