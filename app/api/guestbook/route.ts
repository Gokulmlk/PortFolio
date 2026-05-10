import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Message from "@/models/Message";

export async function GET() {
  await connectDB();

  const messages = await Message.find()
    .sort({ createdAt: -1 });

  return NextResponse.json(messages);
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const newMsg = await Message.create(body);

  return NextResponse.json(newMsg);
}