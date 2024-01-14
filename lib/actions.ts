"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { string, z } from "zod";

const schema = z.object({
  name: z.string().min(2),
});

export const addTodo = async (
  prevState: { errors: { name?: string[] | undefined }; message?: string },
  data: FormData,
) => {
  const name = data.get("name") as string;

  const validateFields = schema.safeParse({
    name,
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.todo.create({ data: { name } });
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
