import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';
import { Sidebar } from '../namespaces/Sidebar';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import SidebarComponent from '../components/Sidebar';
import MainComponent from '../components/Main';

export default class MithrilPage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      sidebar: m(SidebarComponent, { items: Sidebar.state.sidebarItems }),
      main: m(MainComponent, {
        title: 'Mithril',
        users: App.state.users
      })
    },[
      m('p', `A modern client-side Javascript framework for building Single Page
        Applications. It's small (8.45 KB gzipped), fast and provides routing
        and XHR utilities out of the box.`
      )
    ]);
  }
}
