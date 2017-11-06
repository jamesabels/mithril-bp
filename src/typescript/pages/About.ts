import * as m from 'mithril';

// Import namespaces
import { App } from '../namespaces/App';

// Import Layout
import MainLayout from '../layouts/Main';

// Import components
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

export default class AboutPage {
  view (vnode: any) {
    return m(MainLayout, {
      class: 'app',
      sidebar: m(Sidebar, { items: App.sidebarItems, mode: App.state.mode }),
      main: m(Main, {
        mode: App.state.mode,
        title: 'About'
      })
    },[
      m('p', `This is the about view of your mithril app`)
    ]);
  }
}
