import React from 'react';

const ShowAnimals = ({ filteredAnimals }) => {
    if (!filteredAnimals || filteredAnimals.length === 0) {
        return <p>No animals found.</p>;
    }

    return (
        <>
            {filteredAnimals.map((animal, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div
                        className='md:w-[160px] md:h-[191px] sm:w-[100px] sm:h-[120px] p-[46px_16.24px_46.6px_17px] gap-0 rounded-[8px] border-[1px] border-[rgba(20,20,20,1)] bg-[rgba(5,5,5,1)] text-white flex justify-center items-center text-center'>
                        {animal.name}
                    </div>
                    <span
                        className='text-[rgba(255,255,255,0.8)] font-[Space Grotesk] text-[18px] font-[400] leading-[18px] text-left mt-2'>
                        {animal.name}
                    </span>
                </div>
            ))}
        </>
    );
};

export default ShowAnimals;
