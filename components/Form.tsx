"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    setName("");
    router.push("/todos");
  };
  return (
    <form className="flex items-center mt-4" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        className="border mx-2 p-1"
      />
      <button
        type="submit"
        className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
      >
        Add Todo
      </button>
    </form>
  );
}
