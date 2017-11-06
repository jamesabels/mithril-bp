import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

export default class HomePage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      sidebar: m(Sidebar, { items: App.sidebarItems, mode: App.state.mode }),
      main: m(Main, {
        mode: App.state.mode,
        title: 'Home'
      })
    },[
      m('p', `This is the home view of your mithril app`)
    ]);
  }
}
