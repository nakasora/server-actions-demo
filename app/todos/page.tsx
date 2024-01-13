import Form from "@/components/Form";
import DeleteButton from "@/components/delete-button";
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
              <DeleteButton id={todo.id} />
            </li>
          );
        })}
      </ul>
      <Form />
    </div>
  );
}
