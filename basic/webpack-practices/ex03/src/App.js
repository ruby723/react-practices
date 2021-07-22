import './asserts/css/App.css';

const App = function(){
    const app = document.createElement('h1');
    app.className = 'Header';
    app.textContent='Hello Wolrd';
    return app;
}

export { App };