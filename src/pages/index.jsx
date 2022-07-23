import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';

const Home = props => {
  return (
    <Layout path={props.uri}>
      <Hero />
    </Layout>
  );
};

export default Home;
