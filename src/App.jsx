import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import SmoothScrollWrapper from './components/SmoothScrollWrapper'; // Match the name

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: '/about', element: <About /> },
        { path: '/projects', element: <Projects /> },
        { path: '/resume', element: <Resume /> },
        { path: '/blog', element: <Blog /> },
      ],
    },
  ]);

  return (
    <SmoothScrollWrapper>
      <RouterProvider router={router} />
    </SmoothScrollWrapper>
  );
}

export default App;
