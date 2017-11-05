import greet from './modules/greet';
import Hello from './classes/Hello';

// Initalize Elements
const app = document.createElement('div');
const message = new Hello();

// Assign Class Name 
app.className = 'app'

// Append App to dom
document.body.appendChild(app);
message.render(app, 'h1', greet('World!'));
