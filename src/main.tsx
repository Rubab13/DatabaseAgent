import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Ensure root element takes full height
const rootElement = document.getElementById('root')!;
rootElement.style.height = '100vh';
rootElement.style.width = '100%';
rootElement.style.overflow = 'hidden';

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
