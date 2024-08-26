
import React, { } from 'react';
import { getCategory } from "@/lib/data";
import Link from 'next/link';
import ShowCategory from './ShowCategory';

const Category = async() => {
  const categories = await getCategory();

    return (
        <div className='relative '>
            {/* Map through the categories */}
            <div className="flex items-center justify-between gap-[8px] text-white absolute top-[115px] md:top-[102px]  md:left-[130px] sm:left-[50px]  left-[30px]">
             <ShowCategory categories={categories}/>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-[8px] text-white absolute  top-[30px] md:top-[102px]   md:right-[130px] sm:right-[40px]  right-[10px]">
                <Link   className="cursor-pointer sm:p-[10px_16px_10px_16px] md:p-[14px_20px_14px_24px] p-[8px_14px_8px_14px] rounded-full border border-white" href={'/addanimal'}>AddAnimal</Link>
                <Link   className="cursor-pointer sm:p-[10px_16px_10px_16px] md:p-[14px_20px_14px_24px] p-[8px_14px_8px_14px]  rounded-full border border-white" href={'/addcategory'}>AddCategory</Link>
            </div>
        </div>
    );
};

export default Category;
