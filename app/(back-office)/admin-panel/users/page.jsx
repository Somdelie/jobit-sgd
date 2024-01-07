import Header from "@/components/admin-panel/Header"
import UsersDataTable from "@/components/admin-panel/UsersTable"
import React from "react"

const Users = () => {
  return (
    <div className="py-6 px-8">
      <div className="flex items-center justify-between">
        <div>
          <h2>Manage Users</h2>
        </div>
        <Header title="Users" />
      </div>
      <UsersDataTable />
    </div>
  )
}

export default Users
