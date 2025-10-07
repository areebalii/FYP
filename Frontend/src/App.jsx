import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {
   const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ])

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
