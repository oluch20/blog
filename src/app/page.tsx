import { Card } from "@/components/card";

const posts = [
  {
    id: 0,
    title: "title1",
    date: "21.05.2026",
    category: "category1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero, odit ipsum consequatur beatae perferendis at voluptatibus, repellat porro temporibus accusamus eos vel doloribus ad vitae, voluptatem repellendus praesentium. Voluptatum!",
  },
  {
    id: 1,
    title: "title2",
    date: "21.05.2026",
    category: "category2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero, odit ipsum consequatur beatae perferendis at voluptatibus, repellat porro temporibus accusamus eos vel doloribus ad vitae, voluptatem repellendus praesentium. Voluptatum!",
  },
];

export default function Home() {
  return (
    <>
      <div className="h-screen items-center justify-center bg-slate-900 flex">
        <div className="bg-slate-800 flex flex-col items-center justify-center w-1/3 gap-5">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              date={post.date}
              category={post.category}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
