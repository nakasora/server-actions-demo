"use server";
import { revalidatePath } from "next/cache";
export const addTodo = async (data: FormData) => {
  const name = data.get("name") as string;
  if (!name || name.trim() === "") {
    // throw new Error("todoには何か入力してください");
    return;
  }
  await prisma.todo.create({ data: { name } });
  revalidatePath("/todos");
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/todos");
};
