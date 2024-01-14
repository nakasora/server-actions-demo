import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });
  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold mb-4">TODO詳細</h1>
      <div className="text-lg mb-2">Todo ID: {params.id}</div>
      <div className="text-lg mb-2">名前：{todo?.name}</div>
      <div className="text-lg mb-2">
        完了:
        {todo?.isCompleted ? (
          <span className="text-green-500">完了</span>
        ) : (
          <span className="text-red-500">未完了</span>
        )}
      </div>
      <Link href="/todos" className="text-blue-500 underline">
        戻る
      </Link>
    </div>
  );
}
