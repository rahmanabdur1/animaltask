"use client";

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ShowCategory = ({ categories }) => {
    const [showMore, setShowMore] = useState(false);
   
    const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

 

  const handleCategoryClick = (categoryName) => {
   
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    params.set("q", categoryName); // Set the category in the query string
    replace(`${pathname}?${params}`);
  };


    // Splitting categories into the first 5 and the rest
    const firstFiveCategories = categories.slice(0, 4);
    const remainingCategories = categories.slice(4);

    return (
        <>
            

            {/* Display the first 5 categories */}
            {firstFiveCategories.map((category, index) => (
                <span
                    key={index}
                    onClick={() => handleCategoryClick(category.name)} // Handle category click
                    className={`cursor-pointer sm:p-[10px_16px_10px_16px] md:p-[14px_20px_14px_24px] p-[8px_14px_8px_14px]  rounded-full ${index === 0 ? 'border-[1px] text-[rgba(5,143,52,1)] border-[rgba(5,143,52,1)]' : 'border-[1px] text-[rgba(239,13,13,1)] border-[rgba(239,13,13,1)]'}`}

                >
                    {category.name}
                </span>
            ))}
            {/* Show "More" button if there are more than 5 categories */}
            {remainingCategories.length > 0 && (
                <span
                    onClick={() => setShowMore(!showMore)}
                    className='cursor-pointer sm:p-[10px_16px_10px_16px] md:p-[14px_20px_14px_24px] p-[8px_14px_8px_14px]  rounded-full text-[rgba(239,13,13,1)] border-[1px] border-[rgba(239,13,13,1)]'
                >
                    {showMore ? 'Less' : 'More'}
                </span>
            )}

            {/* Show remaining categories in a dropdown if "More" is clicked */}
            {showMore && remainingCategories.length > 0 && (
                <div className="absolute right-0 top-12 mt-2 bg-[rgba(5,5,5,1)]  text-[rgba(239,13,13,1)] border-[1px] border-[rgba(239,13,13,1)] rounded-lg p-3 z-10">
                    {remainingCategories.map((category, index) => (
                        <span
                            key={index}
                            onClick={() => handleCategoryClick(category.name)}
                            className='block cursor-pointer p-2 hover:bg-[rgba(20,20,20,1)] '
                        >
                            {category.name}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default ShowCategory;
