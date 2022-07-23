import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

import GlobalContextProvider from '../../context/GlobalContextProvider';

const Layout = ({ children, path }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalContextProvider>
        <Navbar toggleSidebar={toggleSidebar} path={path} />
        {children}
      </GlobalContextProvider>
    </>
  );
};

export default Layout;
