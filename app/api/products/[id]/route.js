import { connectionMongodb } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  await mongoose.connect(connectionMongodb);
  let data = await req.json();
  let product = await Product.findOneAndUpdate({ _id: res.params.id }, data);
  return NextResponse.json({
    message: "Updated successfully!",
    product,
  });
}

export async function DELETE(req, res) {
  await mongoose.connect(connectionMongodb);
  await Product.findOneAndDelete({ _id: res.params.id });
  return NextResponse.json({
    message: "Deleted successfully!",
  });
}
