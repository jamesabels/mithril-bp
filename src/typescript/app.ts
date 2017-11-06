import * as m from 'mithril';

// Import namespaces
import { App } from './namespaces/App';

// Import Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MithrilPage from './pages/Mithril';

m.route(document.body, '/', {
  '/': HomePage,
  '/about': AboutPage,
  '/mithril': MithrilPage
})
