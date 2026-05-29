"use server";

import { addMedia, addPostQuarry } from "./Quarry";
import { PUT } from "./Blob";

export async function AddPost(
  title: string,
  category: string,
  content: string | null,
  media: File[],
) {
  if (!media.length) {
    throw new Error("Brak wybranego zdjęcia");
  }

  const post = await addPostQuarry(title, category, content);
  
  const blobs: string[] = [];

  for(const m of media) {
    const name = await PUT(m);
    await addMedia(name,post.id);
    blobs.push(name);
  }
  //  const blob = await PUT(media[0]);
  // await addMedia(blob, post.id);

  return { post, blobs };
}
