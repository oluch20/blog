"use client";

import { createContext, useContext, useState } from "react";

export interface Post {
  id: number;
  title: string;
  category: string;
  content: string | null;
  date: string;
}

export type PostContextType = {
  posts: Post[];
  add: () => void;
};

export const PostContext = createContext<PostContextType | undefined>(
  undefined,
);

export function PostProvider({
  children,
  posts = [],
}: {
  children: React.ReactNode;
  posts?: Post[];
}) {
  const [currentPosts, addPosts] = useState([]);

  return (
    <PostContext.Provider value={{ posts: currentPosts, add: () => addPosts }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostContext);
  if (!ctx) {
    throw new Error("usePosts must be used inside PostProvider");
  }
  return ctx;
}
