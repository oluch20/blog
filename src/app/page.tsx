import { Card } from "@/components/card";
import { getPosts } from "@/components/quarry";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <div className="h-screen items-center justify-center bg-slate-900 flex">
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
