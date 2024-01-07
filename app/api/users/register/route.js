"use client"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import db from "@/lib/db"

// Function to check if a user exists in the database by email
async function checkUserExists(email) {
  const existingUser = await db.user.findUnique({
    where: { email },
  })
  return existingUser !== null // Returns true if user exists, false otherwise
}

export async function POST(request) {
  try {
    const { firstName, lastName, email, password, code } = await request.json()

    // Check if the user already exists
    const userExists = await checkUserExists(email)
    if (userExists) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        { status: 400 }
      )
    }

    // Hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await db.user.create({
      data: { firstName, lastName, email, password: hashedPassword, code },
    })

    console.log(newUser)
    return NextResponse.json(
      {
        data: newUser,
        message: "User Created Successfully",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: "Failed to Register a User",
        error: error.message,
      },
      { status: 500 }
    )
  }
}

//get all users

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
