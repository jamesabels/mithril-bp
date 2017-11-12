import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Model
const state: any = {
    title: null,
}

// View
export default class TodoComponent {
    oninit (vnode: any) {
        state.title = vnode.attrs.title;
        console.log('Users', vnode.attrs.users);
    }
    _onSubmit (e: any) {
        e.preventDefault();
        let input = e.srcElement[0];
        App.state.todos.push({value: input.value });
        input.value = null;
    }
    _onDelete (todo: any) {
        let todos = App.state.todos;

        todos.splice(todos.indexOf(todo), 1);
    }
    _renderTodos (that: any, todos: any) {
        return todos.map(function (todo: any) {
            return (
                m('div.todo-wrap.card.mt-2', [
                    m('div.card-header.columns', [
                        m('h1.card-title.h5.column.col-10', todo.value),
                        m('div.button-wrap.column.col-ml-auto', [
                            m('div.button-wrap.columns', [
                                m('div.btn.btn-primary.column', {onclick: (todo) => { that._onDelete(todo) }}, [
                                    m('i.icon.icon-edit')
                                ]),
                                m('div.btn.btn-primary.ml-2.column', {onclick: (todo) => { that._onDelete(todo) }}, [
                                    m('i.icon.icon-cross')
                                ])
                            ])

                        ])
                    ])
                ])
            )
        })
    }
    view (vnode: any) {
        return [
            m('h1', vnode.attrs.title),
            m('div.todo-wrap', [
                this._renderTodos(this, vnode.attrs.todos),
                m('div.form-wrap.mt-2'), [
                    m('form#todoForm.card', {onsubmit: (e) => { this._onSubmit(e) }}, [
                        m('div.card-header.columns', [
                            m('input#todoInput.form-input.column.col-10', {ref: 'todo-input', type: 'text' }),
                            m('button.btn.btn-primary.column.col-2', {type: 'submit' }, [
                                m('i.icon.icon-check')
                            ])
                        ]),
                        // m('div.card-footer', [
                        //     m('button.col-6', {type: 'submit' }, 'Submit')
                        // ])
                    ]),
                ]
            ])
        ]
    }
}
