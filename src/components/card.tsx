"use client";
import { useRouter } from "next/navigation";
import { deletePost } from "./Posts/quarry";

export  function Card({
  id,
  title,
  date,
  category,
  content,
}: {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
}) {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await deletePost(id);
    router.refresh();
  };

  return (
    <div className="min-h-50 w-full flex flex-col bg-slate-700 rounded-3xl">
      <div className="h-2/7 items-center justify-center flex flex-col bg-slate-600 rounded-t-3xl">
        <div className="h-1/3 w-2/3 flex flex-row items-center justify-between text-slate-300">
          <div>{category}</div>
          <div>{date}</div>
        </div>
        <div className="h-2/3 text-3xl flex text-center items-center justify-center">
          {title}
        </div>
      </div>
      <div className="h-5/7 w-full flex justify-center items-center text-center p-4">
        {content}
      </div>
      <button
        className=" bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-800"
        onClick={() => handleDelete(id)}
      >
        Usuń
      </button>
    </div>
  );
}
