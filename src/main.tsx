
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './app/layout/App.tsx'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
  