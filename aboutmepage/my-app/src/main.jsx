import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import Game from './Game.jsx'

// comparable to the "main" class. Entry point is in root directory, "index.html"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
