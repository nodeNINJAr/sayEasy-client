import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
         <div className='container mx-auto'>
         {/* navbar */}
           <Navbar/>
           {/* main */}
              <main className='min-h-screen'>
                 <Outlet/>    
             </main>
           {/* footer */}
           <Footer/>
         </div>
    );
};

export default Layout;