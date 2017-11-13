import * as m from 'mithril';

// Import namespaces
import { App } from './namespaces/App';

// Import Pages
import HomePage from './pages/Home';

m.route(document.body, '/', {
  '/': HomePage,
})
