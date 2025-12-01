import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"

// theme
import { ThemeProvider } from './components/Theme/ThemeContext.jsx'

// layouts
import Full from "./Layouts/Full/Full.jsx"
import Empty from "./Layouts/Empty/Empty.jsx"

// normal pages
import Home from "./pages/NormalPages/Home/Home.jsx"
import Error from "./pages/NormalPages/Error/Error.jsx"

// mini games
import BtnCounter from './pages/MiniGames/BtnCounter/BtnCounter.jsx'
import Calculator from './pages/MiniGames/Calculator/Calculator.jsx'
import ToDoNotes from './pages/MiniGames/ToDoNotes/ToDoNotes.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  
  // full layout
  {
    path: "/",
    element: <Full />,          // layout
    errorElement: <Error />,   // handles 404 and route errors
    children: [
      // normal pages
      { index: true, element: <Home /> }, // default page

      // mini games
      { path: "BtnCounter", element: <BtnCounter/> },
      { path: "Calculator", element: <Calculator/> },
      { path: "ToDoNotes", element: <ToDoNotes/> }

    ]
  },

  // empty layout
  {
    path: "/no-ui",
    element: <Empty />,
    errorElement: <Error />,
    children: [

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
