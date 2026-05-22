import { AddButton } from "@/components/AddButton";
import { Card } from "@/components/card";
import { AddButtonProvider } from "@/components/context";
import { getPosts } from "@/components/quarry";
import AddPanel from "@/components/addPanel";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <div className="h-screen items-center justify-center bg-slate-900 flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between w-1/3">
          <AddButtonProvider>
            <AddButton className="bg-green-600 rounded-2xl text-xl p-2 text-slate-200 cursor-pointer hover:bg-green-700 active:bg-green-800" />
            <AddPanel />
          </AddButtonProvider>

          <div className="bg-red-600 rounded-2xl text-xl p-2 text-slate-200">
            usuń
          </div>
        </div>
        <div className="bg-slate-800 flex flex-col items-center justify-start w-1/3 gap-5 min-h-3/5 max-h-200 overflow-y-auto py-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              date={post.date.toLocaleDateString("pl-PL")}
              category={post.category}
              content={post.content ?? ""}
            />
          ))}
        </div>
      </div>
    </>
  );
}
