import { StrictMode } from 'react'
import '@fontsource/poppins'; // Defaults to 400 weight
import '@fontsource/poppins/500.css'; // Import a specific weight
import '@fontsource/poppins/600.css'; // Import another specific weight

// Your main React app code
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
