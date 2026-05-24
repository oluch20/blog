"use server";
import { prisma } from "@/lib/prisma";

export async function getPosts() {
  return prisma.post.findMany({
    orderBy: { date: "desc" },
  });
}

export async function addPostQuarry(title: string, category: string, content: string | null) {
  return prisma.post.create({
    data: {
      title,
      category,
      content,
      date: new Date(),
    },
  });
}

export async function deletePost(id: number) {
  return prisma.post.delete({
    where: { id },
  });
}
