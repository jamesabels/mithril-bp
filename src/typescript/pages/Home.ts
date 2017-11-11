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

export default class HomePage {
  oninit (vnode: any) {
    Api.getUsers();
  }
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      sidebar: m(SidebarComponent, { items: Sidebar.state.sidebarItems }),
      main: m(MainComponent, {
        title: 'Home',
        users: App.state.users
      })
    },[
      m('p', `This is the home view of your mithril app`)
    ]);
  }
}
