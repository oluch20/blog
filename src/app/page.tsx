import { AddButton } from "@/components/Posts/AddButton";
import { AddButtonProvider } from "@/components/context/addButtonContext";
import { getPosts } from "@/components/Posts/quarry";
import AddPanel from "@/components/addPanel";
import { PostProvider } from "@/components/context/postContext";
import { PostPanel } from "@/components/Posts/PostPanel";
import { connection } from "next/server";

export default async function Home() {
  await connection();
  const posts = await getPosts();
  const postsForContext = posts.map((post) => ({
    ...post,
    date: post.date.toISOString(),
  }));

  return (
    <>
      <div className="h-screen items-center justify-center bg-slate-900 flex flex-col gap-5">
        <PostProvider posts={postsForContext}>
          <div className="flex flex-row items-center justify-between w-1/3">
            <AddButtonProvider>
              <AddButton className="bg-green-600 rounded-2xl text-xl p-2 text-slate-200 cursor-pointer hover:bg-green-700 active:bg-green-800" />
              <AddPanel />
            </AddButtonProvider>
          </div>
          <div className="bg-slate-800 flex flex-col items-center justify-start w-1/3 gap-5 min-h-3/5 max-h-200 overflow-y-auto py-6">
            <PostPanel />
          </div>
        </PostProvider>
      </div>
    </>
  );
}
