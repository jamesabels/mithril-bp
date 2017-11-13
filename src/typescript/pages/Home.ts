import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';
import { Sidebar } from '../namespaces/Sidebar';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import SidebarComponent from '../components/Sidebar';
import TodoListComponent from '../components/TodoList';

export default class HomePage {
  oninit (vnode: any) {
    Api.getUsers();
  }
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      sidebar: m(SidebarComponent, { title: 'Todo App' }),
      main: m(TodoListComponent, {
        title: 'Home',
        todos: App.state.todos
      })
    });
  }
}
