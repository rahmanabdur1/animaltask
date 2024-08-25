import Animal from '@/Components/Animal';
import Category from '@/Components/Category';
import React from 'react';

const Home = () => {
  return (
    <div className='container mx-auto '>
      <Category />
      <Animal />
    </div>
  );
};

export default Home;