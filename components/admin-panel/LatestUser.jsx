import React from "react"
import { Avatar } from "flowbite-react"
import { View } from "lucide-react"
import Link from "next/link"

// Sample array of 5 users
const users = [
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  {
    name: "Neil Sims",
    email: "somdelie@gmail.com",
    createdDate: "24 November 2023",
    position: "React Developer",
    status: "Active",
    avatarImg: "/avatar-3.png",
  },
  // Add more user objects here...
]

const LatestUser = () => {
  return (
    <div class="relative overflow-x-auto shadow-md mt-4">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark-light dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Created Date
            </th>
            <th scope="col" class="px-6 py-3">
              Position
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.slice(0, 5).map((user, index) => (
            <tr
              key={index}
              class="bg-white border-b dark:bg-dark-card dark:border-dark-light hover:bg-gray-50 dark:hover:bg-transparent">
              <th
                scope="row"
                class="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                <Avatar rounded bordered img={user.avatarImg} />
                <div class="ps-3">
                  <div class="text-base font-semibold">{user.name}</div>
                </div>
              </th>
              <td class="px-6 py-4">{user.email}</td>
              <td class="px-6 py-4">{user.createdDate}</td>
              <td class="px-6 py-4">{user.position}</td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                  {user.status}
                </div>
              </td>
              <td class="px-6 py-4">
                <Link href="#" className="hover:text-text">
                  <View />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LatestUser
