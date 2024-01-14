"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addTodo = async (prevState: any, data: FormData) => {
  const name = data.get("name") as string;
  try {
    if (!name || name.trim() === "") {
      throw new Error("todoには何か入力してください");
    }
    await prisma.todo.create({ data: { name } });
  } catch (error) {
    return {
      message: "Failed to add",
    };
  }
  revalidatePath("/todos");
  redirect("/todos");
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/todos");
};

export const updateTodo = async (id: number, data: FormData) => {
  const name = data.get("name") as string;
  try {
    if (!name || name.trim() === "") {
      throw new Error("todoには何か入力してください");
    }
    const isCompleted = data.get("isCompleted") as string;
    await prisma.todo.update({
      where: {
        id,
      },
      data: {
        name,
        isCompleted: isCompleted === "true" ? true : false,
      },
    });
  } catch (error) {
    return {
      message: "Failed to add",
    };
  }
  revalidatePath("/todos");
  redirect("/todos");
};
