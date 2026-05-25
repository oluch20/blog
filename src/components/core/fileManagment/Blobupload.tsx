"use server";
import { put } from "@vercel/blob";
import { extname } from "node:path";


export async function PUT(image: File) {
  const file = image;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const contentType = file.type || `image/${extname(file.name).slice(1)}`;

  const upload = await put(file.name, buffer, {
    access: "public",
    addRandomSuffix: true,
    contentType,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return upload.url;
}
