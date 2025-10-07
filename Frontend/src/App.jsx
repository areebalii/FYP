import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/layout/Layout'

function App() {
   const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
