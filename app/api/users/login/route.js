import bcrypt from "bcrypt"
import db from "@/lib/db"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

async function authenticateUser(email, password) {
  const user = await db.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw new Error("User not found")
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error("Invalid Credentials")
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, "shdhetwthbdr567", {
    expiresIn: "1h",
  })

  return { user, token }
}

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Please provide email and password",
        },
        { status: 400 }
      )
    }

    const { user, token } = await authenticateUser(email, password)

    return NextResponse.json(
      {
        data: { user, token },
        message: "User successfully authenticated",
      },

      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    let status = 500
    if (
      error.message === "User not found" ||
      error.message === "Invalid password"
    ) {
      status = 401
    }
    return NextResponse.json(
      {
        message: "Failed to authenticate user",
        error: error.message,
      },
      { status }
    )
  }
}
