import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

export default class MithrilPage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      sidebar: m(Sidebar, { items: App.sidebarItems, mode: App.state.mode }),
      main: m(Main, {
        mode: App.state.mode,
        title: 'Mithril'
      })
    },[
      m('p', `A modern client-side Javascript framework for building Single Page
        Applications. It's small (8.45 KB gzipped), fast and provides routing
        and XHR utilities out of the box.`
      )
    ]);
  }
}
