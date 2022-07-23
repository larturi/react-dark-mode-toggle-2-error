import './Navbar.scss';

import React, { useState, useContext, useEffect } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../../context/GlobalContextProvider';

const Navbar = props => {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [transparentNavbar, setTransparentNavbar] = useState('');

  const { toggleSidebar, path } = props;

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  let currentLanguaje = state.selectedLang || 'es-AR';
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  let currentTheme = state.selectedTheme || 'dark';
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme')) {
      currentTheme = localStorage.getItem('theme');
      if (isDarkMode === null) {
        setIsDarkMode(currentTheme === 'dark');
      }
    } else {
      setIsDarkMode(currentTheme === 'dark');
    }
  }

  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'es-AR');
    }
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
  }

  useEffect(() => {
    const selectedTheme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', selectedTheme);
    dispatch({ type: 'SET_THEME', payload: selectedTheme });
  }, [isDarkMode, dispatch]);

  return (
    <nav className={`navbar ${currentTheme} ${transparentNavbar}`}>
      <div className="nav-center">
        <div className="nav-header">
          <DarkModeToggle
            onChange={setIsDarkMode}
            isDarkMode={isDarkMode}
            className="dark-mode-toggle"
            size={60}
          />

          <button
            type="button"
            className={`toggle-btn ${currentTheme}`}
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <FaAlignRight />
            <span className="material-icons" aria-hidden="true">
              Menu
            </span>
          </button>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
