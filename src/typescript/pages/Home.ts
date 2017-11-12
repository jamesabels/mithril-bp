import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Api } from '../namespaces/Api';
import { Sidebar } from '../namespaces/Sidebar';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import SidebarComponent from '../components/Sidebar';
import MainComponent from '../components/Main';
import TodoComponent from '../components/Todo';

export default class HomePage {
  oninit (vnode: any) {
    Api.getUsers();
  }
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      sidebar: m(SidebarComponent, { items: Sidebar.state.sidebarItems }),
      main: m(TodoComponent, {
        title: 'Home',
        todos: App.state.todos
      })
    });
  }
}
