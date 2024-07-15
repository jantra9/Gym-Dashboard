import React, { ReactNode } from 'react';
import SideBar from '../ui/dashboard/sidebar/sidebar';
import NavBar from '../ui/dashboard/navbar/navbar';
import TopLogo from '../ui/dashboard/topLogo/topLogo';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen sm:grid sm:grid-cols-11 relative">
      <div className='block p-3 sm:hidden'>
        <TopLogo />
      </div>
      <div className="pb-2 pr-2 z-10 fixed bottom-0 left-0 right-0 sm:static sm:col-span-3 h-1/7 sm:h-full bg-black bg-opacity-100 pt-4 ">
        <SideBar />
      </div>
      <div className="sm:col-span-8 bg-white text-black sm:ml-2">
        <div>
          <NavBar />
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
