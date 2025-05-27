import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/id/:id',
    element: <ProductDetail />
  },
  {
    path: '*',
    element: <h1 className="heading error">Page Not Found</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)