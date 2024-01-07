//get all users
import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "asc",
      },
    })
    return NextResponse.json(users)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Failed to Fetch Users",
        error,
      },
      { status: 500 }
    )
  }
}
