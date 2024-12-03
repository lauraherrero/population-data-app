import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PopulationDataApp } from './PopulationDataApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PopulationDataApp />
  </StrictMode>,
)
