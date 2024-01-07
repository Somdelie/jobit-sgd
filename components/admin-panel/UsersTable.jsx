"use client"
import { Pagination } from "flowbite-react"
import { Avatar } from "@mui/material"
import { useState } from "react"
import PageLoader from "../ui/PageLoader"

const Next14 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      photoURL: "/avatar-3.png",
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "USER",
      status: "active",
      createdAt: "2023-03-15T12:00:00Z",
      phone: "999-888-7777",
      address: "789 Oak St, Paris, France",
    },
    {
      id: 2,
      photoURL: "/avatar-3.png",
      name: "Bob Smith",
      email: "bob@example.com",
      role: "EDITOR",
      status: "blocked",
      createdAt: "2023-07-05T14:30:00Z",
      phone: "555-444-3333",
      address: "456 Pine St, Madrid, Spain",
    },
    {
      id: 3,
      photoURL: "/avatar-3.png",
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "ADMIN",
      status: "active",
      createdAt: "2023-12-20T09:45:00Z",
      phone: "777-777-7777",
      address: "321 Elm St, New York, USA",
    },
    {
      id: 4,
      photoURL: "/avatar-3.png",
      name: "Michael Johnson",
      email: "michael@example.com",
      role: "USER",
      status: "active",
      createdAt: "2023-05-20T08:15:00Z",
      phone: "222-333-4444",
      address: "567 Maple St, Berlin, Germany",
    },
    {
      id: 5,
      photoURL: "/avatar-3.png",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "ADMIN",
      status: "blocked",
      createdAt: "2022-08-10T16:20:00Z",
      phone: "777-888-9999",
      address: "890 Pine St, Sydney, Australia",
    },
    {
      id: 6,
      photoURL: "/avatar-3.png",
      name: "David Wilson",
      email: "david@example.com",
      role: "EDITOR",
      status: "active",
      createdAt: "2024-01-07T11:00:00Z",
      phone: "444-555-6666",
      address: "901 Cedar St, Tokyo, Japan",
    },
    {
      id: 7,
      photoURL: "/avatar-3.png",
      name: "Sophia Brown",
      email: "sophia@example.com",
      role: "USER",
      status: "active",
      createdAt: "2023-10-30T14:45:00Z",
      phone: "666-777-8888",
      address: "345 Oak St, Rome, Italy",
    },
    {
      id: 8,
      photoURL: "/avatar-3.png",
      name: "John Smith",
      email: "john@example.com",
      role: "ADMIN",
      status: "blocked",
      createdAt: "2022-11-25T09:30:00Z",
      phone: "111-222-3333",
      address: "123 Elm St, London, UK",
    },
    {
      id: 9,
      photoURL: "/avatar-3.png",
      name: "Olivia Williams",
      email: "olivia@example.com",
      role: "USER",
      status: "active",
      createdAt: "2023-01-10T09:00:00Z",
      phone: "333-222-1111",
      address: "987 Oak St, Milan, Italy",
    },
    {
      id: 10,
      photoURL: "/avatar-3.png",
      name: "Ethan Davis",
      email: "ethan@example.com",
      role: "ADMIN",
      status: "blocked",
      createdAt: "2022-12-05T15:30:00Z",
      phone: "888-999-0000",
      address: "654 Pine St, Barcelona, Spain",
    },
    // ... (other user data)
  ])

  const usersPerPage = 10
  const totalPages = Math.ceil(usersData.length / usersPerPage)

  const onPageChange = (page) => setCurrentPage(page)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser)

  const handleRoleChange = (event, userId) => {
    const updatedUsers = usersData.map((user) =>
      user.id === userId ? { ...user, role: event.target.value } : user
    )
    setUsersData(updatedUsers)
  }

  const handleStatusChange = (event, userId) => {
    const updatedUsers = usersData.map((user) =>
      user.id === userId ? { ...user, status: event.target.value } : user
    )
    setUsersData(updatedUsers)
  }

  return (
    <div className="w-full mt-6">
      {loading ? (
        <PageLoader />
      ) : (
        <table className="w-full bg-white dark:bg-dark-card ">
          <thead className="bg-gray-50 dark:bg-dark-light">
            <tr>
              <th className="border thead">AVATAR</th>
              <th className="border thead">Name</th>
              <th className="border thead">Email</th>
              <th className="border thead">Role</th>
              <th className="border thead">Status</th>
              <th className="border thead">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {currentUsers?.map((user) => (
              <tr key={user?.id}>
                <td className="trow">
                  <Avatar src={user?.photoURL} />
                </td>
                <td className="trow">{user?.name}</td>
                <td className="trow">{user?.email}</td>
                <td className="trow text-center">
                  <select
                    value={user?.role}
                    onChange={(e) => handleRoleChange(e, user.id)}
                    className="select-no-background">
                    <option value="USER">USER</option>
                    <option value="EDITOR">EDITOR</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </td>
                <td className="trow text-center">
                  {user.status === "active" ? (
                    <span className="bg-green-500 text-white rounded px-4 py-2 text-center">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white rounded px-4 py-2 text-center">
                      Blocked
                    </span>
                  )}
                </td>
                <td className="trow text-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                    View
                  </button>
                  <select
                    value={user.status}
                    onChange={(e) => handleStatusChange(e, user.id)}
                    className="select-no-background ">
                    <option value="active">ACTIVATE</option>
                    <option value="blocked">BLOCK</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {usersData.length > usersPerPage && ( // Conditionally rendering pagination
        <div className="flex overflow-x-auto sm:justify-end mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  )
}

export default Next14
