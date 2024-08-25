"use client";
import React, { useState } from 'react';
import AddAnimal from './AddAnimal';
import AddCategory from './AddCategory';
import { useSearchParams, useRouter } from 'next/navigation';


const Category = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [showAnimalPopup, setShowAnimalPopup] = useState(false);
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);

    const handleSearch = (term) => {

        const params = new URLSearchParams(searchParams.toString());
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        router.push(`?${params.toString()}`);
    };

    const handleAddAnimalClick = () => setShowAnimalPopup(true);
    const handleAddCategoryClick = () => setShowCategoryPopup(true);
    const closePopups = () => {
        setShowAnimalPopup(false);
        setShowCategoryPopup(false);
    };



    return (
        <div className='relative'>

<div className="flex items-center justify-between gap-[8px] text-white absolute top-[102px] left-[135px]">
                {/* animal section */}
                <span className='text-[rgba(5, 143, 52, 1)] p-[14px_20px_14px_24px] rounded-full border border-white'>Land Animal</span>
                <span
                    
                    onClick={(e) => handleSearch('Bird')}
                 className=' cursor-pointer p-[14px_20px_14px_24px] rounded-full border border-white'>Bird</span>

            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-[8px] text-white absolute top-[102px] right-[135px]">
                <span
                    className='w-[140px] p-[14px_20px_14px_24px] rounded-full border border-white cursor-pointer'
                    onClick={handleAddAnimalClick}
                >
                    Add Animal
                </span>
                <span
                    className='w-[164px] p-[14px_20px_14px_24px] rounded-full border border-white cursor-pointer'
                    onClick={handleAddCategoryClick}
                >
                    Add Category
                </span>
            </div>

            {/* Add Animal Popup */}
            {showAnimalPopup && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[100] flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-black w-[300px] relative">
                        {/* Close Button */}
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closePopups}>
                            &times; {/* This is the "X" symbol */}
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Add Animal</h2>
                        <AddAnimal />
                    </div>
                </div>
            )}

            {/* Add Category Popup */}
            {showCategoryPopup && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[100] flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-black w-[300px] relative">
                        {/* Close Button */}
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closePopups}>
                            &times; {/* This is the "X" symbol */}
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Add Category</h2>
                        <AddCategory />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;
