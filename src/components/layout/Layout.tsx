
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingContact } from '../ui/FloatingContact';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-0">
        <Outlet />
      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};
