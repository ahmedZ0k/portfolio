import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div className="  min-h-screen text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
