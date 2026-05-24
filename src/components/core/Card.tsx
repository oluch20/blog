"use client";

import { usePosts } from "@/components/context/postContext";
import { MyButton } from "@/components/core/MyButton";
import { deletePost } from "@/components/core/Quarry";

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
  const  { remove } = usePosts();

  const handleDelete = async (id: number) => {
    await deletePost(id);
    remove(id);
  };

  return (
    <div className="min-h-70 w-full flex flex-col bg-slate-700 rounded-3xl">
      <div className="h-2/7 items-center justify-center flex flex-col bg-slate-600 rounded-t-3xl">
        <div className="h-1/3 w-2/3 flex flex-row items-center justify-between text-slate-300 p-3">
          <div>{category}</div>
          <div>{date}</div>
        </div>
        <div className="h-2/3 text-3xl flex text-center items-center justify-center">
          {title}
        </div>
      </div>
      <div className="h-5/7 w-full flex justify-center items-center text-center p-4 text-2xl">
        {content}
      </div>
      <div className="h-1/3 w-full flex flex-row items-center justify-center">
      <img src="ready_or_not.png" alt="placeholder" className="w-full h-40 object-cover rounded-b-3xl" />
      </div>
      
      <MyButton
        className=" bg-red-600/75 hover:bg-red-700/75 active:bg-red-800/75 self-end m-3"
        onClick={() => handleDelete(id)}
      >
        Usuń
      </MyButton>
    </div>
  );
}
