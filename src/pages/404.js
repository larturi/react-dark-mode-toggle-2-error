import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';

const Page404 = props => {
  return (
    <Layout path={props.uri}>
      <Hero />
    </Layout>
  );
};

export default Page404;
