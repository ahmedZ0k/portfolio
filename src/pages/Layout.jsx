import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from '../assets/purple.png';

function Layout() {
  return (
    <div
      className="  min-h-screen text-white "
      style={{ backgroundImage: `url(${Image})` }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
