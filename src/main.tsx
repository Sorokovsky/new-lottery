import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import '../src/styles/index.sass';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./sw.js");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
