"use client"

import { addAnimal } from "@/lib/action";

import { useFormState } from "react-dom";

const AddAnimal = ({ closePopup }) => {
    // Initialize form state
    const [state, formAction] = useFormState(addAnimal);

    return (
        <form action={formAction}>
            <input
                type="text"
                name="animalName"
                placeholder="Animal Name"
                required
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
            />
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 rounded"
                    onClick={closePopup} // Close popup on cancel
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Save Animal
                </button>
            </div>
        </form>
    );
};

export default AddAnimal;