import './Hero.scss';

import React from 'react';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';


const Hero = () => {
  let { currentTheme } = useCurrentTheme() || 'dark';

  return (
    <header className={`hero ${currentTheme}`}>
      <section className="section-center hero-center">
        <article className={`hero-info ${currentTheme}`}>
          <div>
           
          </div>
        </article>
      </section>
    </header>
  );
};

export default Hero;
