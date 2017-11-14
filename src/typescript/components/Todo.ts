import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Model
const state: any = {
    edit: true
}

// View
export default class TodoComponent {
    view (vnode: any) {
        if(!vnode.attrs.editState) {
            return [
                m('div#todo-wrap.card.mt-2', [
                    m('div.card-header.columns', [
                        m('h1.card-title.h5.column.col-10', vnode.attrs.todo.value),
                        m('div.button-wrap.column.col-ml-auto', [
                            m('div.button-wrap.columns', [
                                m('div.btn.btn-primary.column', {onclick: () => { vnode.attrs.onEdit() }}, [
                                    m('i.icon.icon-edit')
                                ]),
                                m('div.btn.btn-primary.ml-2.column', {onclick: (e) => { vnode.attrs.onDelete(e) }}, [
                                    m('i.icon.icon-cross')
                                ])
                            ])

                        ])
                    ])
                ])
            ]
        } else {
            return [
                m('div.form-wrap.mt-2'), [
                    m('form.form-group#todoForm.card', {onsubmit: (e) => { vnode.attrs.onUpdate(e, vnode.attrs.todo) }}, [
                        m('div.card-header.columns', [
                            m('input#todoInput.form-input.column.col-10', {ref: 'todo-input', type: 'text', value: vnode.attrs.todo.value}),
                            m('div.button-wrap.column.col-ml-auto', [
                                m('div.button-wrap.columns', [
                                    m('div.btn.btn-primary.ml-2.column', {onclick: () => { vnode.attrs.onEdit() }}, [
                                        m('i.icon.icon-back')
                                    ]),
                                    m('button.btn.btn-primary.ml-2.column', {type: 'submit'}, [
                                        m('i.icon.icon-check')
                                    ])
                                ])

                            ])
                        ])
                    ]),
                ]
            ]
        }
    }
}
