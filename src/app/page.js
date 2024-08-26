
import Category from '@/Components/Category';
import Pagination from '@/Components/Pagination/Pagination';
import ShowAnimals from '@/Components/ShowAnimals';

import { fetchProducts, } from '@/lib/data';
import React from 'react';

const Home = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);


  return (
    <div className=''>
      <Category />
      <div className="absolute  top-[219px] left-[135px] grid gap-[17px] grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <ShowAnimals filteredAnimals={products} />
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default Home;