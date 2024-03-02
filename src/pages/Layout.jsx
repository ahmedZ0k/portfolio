import { Analytics } from '@vercel/analytics/react';
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
      <Analytics />
    </div>
  );
}

export default Layout;
