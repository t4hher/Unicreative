import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout() {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
}