import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App.tsx';
import { ProtectedRoute } from './components/protectedRoutes/index.tsx';
import AuthProvider from './contexts/auth-context/AuthProvider.tsx';
import { Completed } from './pages/completed/index.tsx';
import { CreateTask } from './pages/create-tasks/index.tsx';
import { Favorites } from './pages/favorites/index.tsx';
import { Home } from './pages/home/index.tsx';
import { NotFound } from './pages/notFound/index.tsx';
import { Register } from './pages/register/index.tsx';
import { SignIn } from './pages/sigIn/index.tsx';
import { Tasks } from './pages/tasks/index.tsx';
import { UpdateTask } from './pages/update-task/index.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute element={<Home />} />
      },
      {
        path: '/tasks/*',
        element: <ProtectedRoute element={<Tasks />} />
      },{
        path: '/register',
        element: <Register />
      },
      {
        path: '/favorites/*',
        element: <ProtectedRoute element={<Favorites />} />
      },
      {
        path: '/completed/*',
        element: <ProtectedRoute element={<Completed />} />
      },
      {
        path: '/create-task/*',
        element: <ProtectedRoute element={<CreateTask />} />
      },
      {
        path: '/update-task/:id',
        element: <ProtectedRoute element={<UpdateTask />} />
      },
      {
        path: '/signin',
        element: <SignIn />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
