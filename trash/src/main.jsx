import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// normal pages
import App from './App.jsx'
import Home from "./pages/NormalPages/Home/Home.jsx"
import Error from "./pages/NormalPages/Error/Error.jsx"

// mini games
import BtnCounter from './pages/MiniGames/BtnCounter/BtnCounter.jsx'
import Calculator from './pages/MiniGames/Calculator/Calculator.jsx'
import ToDoNotes from './pages/MiniGames/ToDoNotes/ToDoNotes.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          // layout
    errorElement: <Error />,   // handles 404 and route errors
    children: [
      // normal pages
      { index: true, element: <Home /> }, // default page

      // mini games
      { path: "BtnCounter", element: <BtnCounter/> },
      { path: "Calculator", element: <Calculator/> },
      { path: "ToDoNotes", element: <ToDoNotes/> }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
