import CreateForm from "@/components/create-form";
import Link from "next/link";
export default function Page() {
  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold mb-4">TODO追加</h1>
      <CreateForm />
      <Link href="/todos" className="text-blue-500 underline">
        戻る
      </Link>
    </div>
  );
}
