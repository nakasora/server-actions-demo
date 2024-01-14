"use client";
import { addTodo } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import SubmitButton from "./submit-button";
const initialState = {
  message: "",
  errors: {},
};

export default function CreateForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(addTodo, initialState);
  return (
    <div>
      <form action={formAction} className="flex items-center mt-4">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" className="border mx-2 p-1" required />
        <SubmitButton />
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
