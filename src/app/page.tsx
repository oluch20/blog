import { getPosts } from "@/components/core/fileManagment/Quarry";
import { PostsSection } from "@/components/Posts/PostsSection";
import { connection } from "next/server";

export default async function Home() {
  await connection();
  const posts = await getPosts();
  const postsForContext = posts.map((post) => ({
    ...post,
    date: post.date.toISOString(),
    media: (post.media ?? []).map((media) => media.url),
  }));

  console.log('[page] postsForContext sample', postsForContext.map(p => ({ id: p.id, media: p.media }))); 

  return <PostsSection posts={postsForContext} />;
}
