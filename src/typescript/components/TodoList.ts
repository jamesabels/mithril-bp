import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Import Components
import TodoComponent from './Todo';
import EmptyComponent from './Empty';

// Model
const state: any = {
    title: null,
    edit: false
}

// View
export default class TodoListComponent {
    _onSubmit (e: any) {
        e.preventDefault();
        let input = e.srcElement[0];
        if (input.value.length === 0) {
            return;
        } else if (input.value.length > 0) {
            App.state.todos.push({value: input.value });
            input.value = null;
        } else {
            return;
        }
    }
    _onDelete (todo: any) {
        let todos = App.state.todos;
        todos.splice(todos.indexOf(todo), 1);
    }
    _onEdit () {
        state.edit = !state.edit;
        console.log('Edit Status', state.edit);
    }
    _onUpdate (e: any, oldTodo: any) {
        e.preventDefault();
        let todos = App.state.todos;
        let input = e.srcElement[0];

        // Get original object
        let index = todos.indexOf(oldTodo);

        // Make sure input is not empty
        if (input.value.length === 0) {
            console.log('Checking if input is empty ', input.value);
            return;
        } else if (input.value.length > 0) {
            todos[index] = { value: input.value };
            state.edit = !state.edit;
        } else {
            return;
        }
    }
    _renderTodos (that: any, todos: any, editState: boolean) {
        if (todos.length > 0) {
            return todos.map(function (todo: any) {
                return (
                    m(TodoComponent, {
                        todo: todo,
                        onDelete: that._onDelete,
                        onEdit: that._onEdit,
                        editState: editState,
                        onUpdate: that._onUpdate
                    })
                )
            })
        } else {
            return [
               m(EmptyComponent, {
                verb: 'success',
                icon: 'check',
                title: 'You are out of things to do',
                subtitle: `Assuming you're not a liar`,
                action: that._renderInput(that)   
               })
            ]
        }
    }
    _renderInput (that: any) {
        return m('div.form-wrap.mt-2', [
            m('form#todoForm.card', {onsubmit: (e) => { that._onSubmit(e) }}, [
                m('div.card-header.columns', [
                    m('input#todoInput.form-input.column.col-10', {ref: 'todo-input', type: 'text', placeholder: 'What do you need to do?' }),
                    m('button.btn.btn-primary.ml-2.column', {type: 'submit' }, [
                        m('i.icon.icon-check')
                    ])
                ])
            ])
        ])
    }
    view (vnode: any) {
        if(vnode.attrs.todos.length > 0) {
            return [
                m('div.todo-wrap', [
                    this._renderInput(this),
                    this._renderTodos(this, vnode.attrs.todos, state.edit)
                ])
            ]
        } else {
            return [
                m('div.todo-wrap', [
                    this._renderTodos(this, vnode.attrs.todos, state.edit)
                ])
            ]
        }
    }
}
