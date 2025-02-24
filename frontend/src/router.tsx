import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Loading from "./components/Loading";
import AppLayout from "./components/AppLayout";

const InicioPage = lazy(() => import("./routes/inicio"));
const LoginPage = lazy(() => import("./routes/login"));
const AlumnosPage = lazy(() => import("./routes/alumnos"));
const ProfesoresPage = lazy(() => import("./routes/profesores"));
const PagosPage = lazy(() => import("./routes/pagos"));

// const ProtectedRoute = ({ children }) => {
//   const enteredFromLogin = localStorage.getItem(ENTERED_FROM_LOGIN) === 'true';

//   if (!enteredFromLogin) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading fullscreen />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: "/", // default route
        element: (
          // <ProtectedRoute>
          <Suspense fallback={<Loading fullscreen />}>
            <InicioPage />
          </Suspense>
          // </ProtectedRoute>
        ),
      },
      {
        path: "/alumnos", // default route
        element: (
          // <ProtectedRoute>
          <Suspense fallback={<Loading fullscreen />}>
            <AlumnosPage />
          </Suspense>
          // </ProtectedRoute>
        ),
      },
      {
        path: "/cuotas", // default route
        element: (
          // <ProtectedRoute>
          <Suspense fallback={<Loading fullscreen />}>
            <InicioPage />
          </Suspense>
          // </ProtectedRoute>
        ),
      },
      {
        path: "/pagos", // default route
        element: (
          // <ProtectedRoute>
          <Suspense fallback={<Loading fullscreen />}>
            <PagosPage />
          </Suspense>
          // </ProtectedRoute>
        ),
      },
      {
        path: "/profes", // default route
        element: (
          // <ProtectedRoute>
          <Suspense fallback={<Loading fullscreen />}>
            <ProfesoresPage />
          </Suspense>
          // </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router; 