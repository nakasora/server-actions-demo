"use client";

import { addTodo } from "@/lib/actions";
const Form = () => {
  return (
    <form className="flex items-center mt-4" action={addTodo}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" className="border mx-2 p-1" />
      <button
        type="submit"
        className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
      >
        Add Todo
      </button>
    </form>
  );
};

export default Form;
