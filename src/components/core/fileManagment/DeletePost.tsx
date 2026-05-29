import { deleteBlob } from "./Blob";
import { deletePostQuarry } from "./Quarry";

export async function deletePost(id: number, media: string[]) {
    await deleteBlob(media);
    await deletePostQuarry(id);

    return true;
}