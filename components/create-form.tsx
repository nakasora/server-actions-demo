"use client";
import { addTodo } from "@/lib/actions";
import { useFormState } from "react-dom";
const initialState = {
  message: "",
  errors: {},
};

export default function CreateForm() {
  const [state, formAction] = useFormState(addTodo, initialState);
  return (
    <div>
      <form action={formAction} className="flex items-center mt-4">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="border mx-2 p-1" required />
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
        >
          Add Todo
        </button>
      </form>
      {state.message ?? <div className="text-red-600 font-bold my-2"></div>}
      {state?.errors?.name &&
        state.errors.name.map((error: string) => (
          <div className="text-red-600 font-bold my-2" key={error}>
            {error}
          </div>
        ))}
    </div>
  );
}
