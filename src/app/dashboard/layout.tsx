import React, { ReactNode } from 'react';
import SideBar from '../ui/dashboard/sidebar/sidebar';
import NavBar from '../ui/dashboard/navbar/navbar';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-10 h-full '>
      <div className='col-span-2 bg-black pt-7 px-4'>
        <SideBar />
      </div>
      <div className='col-span-8 bg-white text-black'>
        <div>
            <NavBar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
