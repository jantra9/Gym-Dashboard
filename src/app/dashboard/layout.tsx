import React, { ReactNode } from 'react';
import SideBar from '../ui/dashboard/sidebar/sidebar';
import NavBar from '../ui/dashboard/navbar/navbar';
import styles from '../ui/dashboard/dashboard.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <div className={styles.navbarContainer}>
            <NavBar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
