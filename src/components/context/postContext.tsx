"use client";

import { createContext, useContext, useState } from "react";

export interface Post {
  id: number;
  title: string;
  category: string;
  content: string | null;
  date: string;
}

 type PostContextType = {
  posts: Post[];
  add: (post: Post) => void;
  remove: (id: number) => void;
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
  const [currentPosts, addPosts] = useState<Post[]>(posts);

  const add = (post: Post) => {
    addPosts((oldPosts) => [...oldPosts, post]);
  }

  const remove = (id: number) => {
    addPosts((oldPosts) => oldPosts.filter((post) => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts: currentPosts, add, remove }}>
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
