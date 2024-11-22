
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './app/layout/App.tsx'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
  