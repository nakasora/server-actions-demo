import { updateTodo } from "@/lib/actions";
import Link from "next/link";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });
  const updateTodoWithId = updateTodo.bind(null, id);

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo更新</h1>
      <form action={updateTodoWithId} className="flex items-center mt-4">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="border mx-2 p-1"
            defaultValue={todo?.name}
          />
        </div>
        <div>
          <input
            type="radio"
            name="isCompleted"
            value="true"
            defaultChecked={todo?.isCompleted === true}
          />
        </div>
        <label htmlFor="isCompleted">完了</label>
        <div>
          <input
            type="radio"
            name="isCompleted"
            value="true"
            defaultChecked={todo?.isCompleted === false}
          />
        </div>
        <label htmlFor="isCompleted">未完了</label>
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
        >
          Update Todo
        </button>
      </form>
      <Link href="/todos" className="text-blue-500 underline">
        戻る
      </Link>
    </div>
  );
}
