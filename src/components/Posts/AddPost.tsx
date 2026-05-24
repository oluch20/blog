import { put } from "@vercel/blob";

export async function AddPost(title: string, category: string, content: string | null, imageName: string, media: File[]) {
  const { url } = await put('post-media', imageName, {access: 'public'});
    return (
        await put
  );
}
