import { getPosts } from "@/components/core/Quarry";
import { PostsSection } from "@/components/Posts/PostsSection";
import { connection } from "next/server";

export default async function Home() {
  await connection();
  const posts = await getPosts();
  const postsForContext = posts.map((post) => ({
    ...post,
    date: post.date.toISOString(),
  }));

  return <PostsSection posts={postsForContext} />;
}
