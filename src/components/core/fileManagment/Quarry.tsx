"use server";
import { prisma } from "@/lib/prisma";

export async function getPosts() {
  return prisma.post.findMany({
    orderBy: { date: "desc" },
    include: { media: true },
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

export async function deletePostQuarry(id: number) {
  await prisma.media.deleteMany({
    where: { postId: id },
  });
  return prisma.post.delete({
    where: { id },
  });
}

export async function addMedia(url: string, postId: number) {
  return prisma.media.create({
    data: {
      url,
      postId,
      alt: "Media",
    },
  });
}