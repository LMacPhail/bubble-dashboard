import User from "@/app/models/user";
import connectMongoDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import { userData } from "@/app/data/userData";

export async function POST(req: any) {
  const data = await req.json();

  const db = await connectMongoDB();

  if (db === undefined) {
    return NextResponse.json(
      { message: "Error connecting to MongoDB" },
      { status: 500 }
    );
  }
  // populate user data
  //   await User.insertMany(userData);

  await User.create(data);
  return NextResponse.json({ message: "User data created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
