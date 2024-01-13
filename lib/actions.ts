"use server";
import { revalidatePath } from "next/cache";
export const addTodo = async (data: FormData) => {
  const name = data.get("name") as string;
  await prisma.todo.create({ data: { name } });
  revalidatePath("/todos");
};

export const deleteTodo = async (id: nubmer) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/todos");
};
