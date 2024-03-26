import { connectionMongodb } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionMongodb);
  let data = await Product.find();
  return NextResponse.json({
    message: "All Products",
    data,
  });
}

export async function POST(req, res) {
  let data = await req.json();
  await mongoose.connect(connectionMongodb);
  let product = new Product(data);
  let result = await product.save();

  return NextResponse.json({
    message: "Product Created!",
    result,
  });
}
