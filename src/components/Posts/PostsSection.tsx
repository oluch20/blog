"use client";

import { AddButton } from "@/components/core/AddButton";
import AddPanel from "@/components/AddPanel";
import { AddButtonProvider } from "@/components/context/addButtonContext";
import { PostProvider, type Post } from "@/components/context/postContext";
import { PostPanel } from "@/components/Posts/PostPanel";

type PostsSectionProps = {
  posts: Post[];
};

export function PostsSection({ posts }: PostsSectionProps) {
  return (
    <div className="h-screen items-center justify-center bg-slate-900 flex flex-col gap-5">
      <PostProvider posts={posts}>
        <div className="flex flex-row items-center justify-between w-1/3">
          <AddButtonProvider>
            <AddButton className="bg-green-600/50 hover:bg-green-700/50 active:bg-green-800/50" />
            <AddPanel />
          </AddButtonProvider>
        </div>

        <div className="bg-slate-800 flex flex-col items-center justify-start w-1/3 gap-5 h-3/5 overflow-y-auto rounded-3xl">
          <PostPanel />
        </div>
      </PostProvider>
    </div>
  );
}