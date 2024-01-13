import Form from "@/components/Form";
import prisma from "@/lib/prisma";

export default async function Page() {
  const todos = await prisma.todo.findMany();

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <form action="deleteTodo">
                <button className="bg-red-500 px-2 py-1 rounded-lg text-sm text-white">
                  削除
                </button>
              </form>
            </li>
          );
        })}
      </ul>
      <Form />
    </div>
  );
}
