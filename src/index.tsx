import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
<StrictMode>
    <App />
</StrictMode>
)
