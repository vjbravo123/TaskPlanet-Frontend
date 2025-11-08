import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EmailsignupPage from './pages/EmailsignupPage.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { createRoot } from 'react-dom/client'
import FeedPage from './pages/FeedPage.jsx'
import EmailSignup from './pages/EmailOption.jsx'
import Signup from './pages/Signup.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index:true , element:<Signup/>},
      { path: '/feed', element: <FeedPage /> },
      { path: '/email-signup', element: <EmailSignup /> },
      { path: '/email-signup-form', element: <EmailsignupPage /> },
    ]
  },
])
const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
    <RouterProvider router={router}>

      <App />

    </RouterProvider>
  </GoogleOAuthProvider>

)
