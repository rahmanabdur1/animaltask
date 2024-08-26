"use client";
import { useFormState } from "react-dom";
import { addCategory } from "@/lib/action";

const AddCategorysForm = ({ closePopup }) => {
    const [state, formAction] = useFormState(addCategory);

    return (
        <form action={formAction} method="post">
            <input
                type="text"
                name="categoryName" 
                placeholder="Category Name"
                className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 rounded"
                    onClick={closePopup}
                >
                    Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Save Category
                </button>
            </div>
        </form>
    );
};

export default AddCategorysForm;