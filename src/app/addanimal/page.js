import AddAnimalForm from '@/Components/AddAnimalForm';
import Link from 'next/link';
import React from 'react';

const AddAnimal = () => {
    return (
        <div>
                 <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[100] flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-black w-[300px] relative">
                        {/* Close Button */}
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" >
                        <Link href={'/'}>Back</Link>
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Add Animal</h2>
                        <AddAnimalForm />
                    </div>
                </div>
        </div>
    );
};

export default AddAnimal;