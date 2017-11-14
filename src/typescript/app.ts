import * as m from 'mithril';

// Import namespaces
import { App } from './namespaces/App';

// Import Pages
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import SettingsPage from './pages/Settings';

m.route(document.body, '/', {
  '/': LoginPage,
  '/register': RegisterPage,
  '/todo': HomePage,
  '/settings': SettingsPage
})
