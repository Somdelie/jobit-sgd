import db from "@/lib/db"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(request) {
  try {
    //extract the credentials
    const { email, firstName, lastName, role, password } = await request.json()

    //check if user Already exists in the db
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    })
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User Already exists",
        },
        { status: 409 }
      )
    }
    //Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        role,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      {
        data: newUser,
        message: "User Created Successfully",
      },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      { status: 500 }
    )
  }
}
