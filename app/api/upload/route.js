import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
export async function POST(req) {
  let result = await req.formData();
  console.log(result);
  let file = result.get("file");
  if (!file) {
    return NextResponse.json(
      { message: "no image found", success: false },
      { status: 400 }
    );
  }
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json(
    { message: "image uploaded", success: true },
    { status: 201 }
  );
}
