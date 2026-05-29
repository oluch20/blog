"use client";
import { Card } from "@/components/core/Card";
import { usePosts } from "../context/PostContext";

export function PostPanel() {
  const { posts } = usePosts();

  return (
    <>
      {posts.map((post) => (
        <Card
          id={post.id}
          key={post.id}
          title={post.title}
          date={new Date(post.date).toLocaleDateString("pl-PL")}
          category={post.category}
          content={post.content ?? ""}
          media={post.media}
        />
      ))}
    </>
  );
}
