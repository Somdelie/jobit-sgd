import useUser from "@/lib/loggedInUser"
import { Avatar, Badge } from "@mui/material"
import { Dropdown } from "flowbite-react"
import { Bell, Home, Mail } from "lucide-react"
import Link from "next/link"
import React from "react"
import { ThemeSwitcher } from "../ThemeSwitcher"
// import MailIcon from "@mui/icons-material/Mail"

const Navbar = () => {
  const { user, handleLogout } = useUser()

  return (
    <nav className="bg-white dark:text-text flex items-center justify-between px-4 text-textColor text-[14px] dark:bg-dark-card sticky w-full z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600 h-[60px]">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-secondaryGreen">
        <Home />
        <span className="text-[18px] font-semibold"> Home</span>
      </Link>
      {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
      <div className="flex items-center gap-6">
        <ThemeSwitcher />
        <div className="flex items-center gap-2">
          <Badge badgeContent={4} color="primary">
            <Bell />
          </Badge>
          <Badge badgeContent={14} color="primary">
            <Mail />
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium dark:text-gray-300">
            {user?.firstName}
          </span>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="r">{user?.firstName.charAt(0)}</Avatar>}>
            <Dropdown.Header>
              <span className="flex items-center text-sm">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link href="/admin-panel">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
