"use client"
import { BiSolidDashboard } from "react-icons/bi"
import Heading from "./Heading"
import Link from "next/link"
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  PowerCircle,
  Settings,
  User,
  UserSquare2,
  Users,
  Users2,
  Workflow,
} from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { FaTasks } from "react-icons/fa"
import Image from "next/image"
import useUser from "@/lib/loggedInUser"
import { IoBriefcaseOutline } from "react-icons/io5"
import { FaPeopleRoof } from "react-icons/fa6"
import { MdOutlineMessage } from "react-icons/md"

const main = [
  {
    title: "Dashboard",
    icon: <BiSolidDashboard />,
    link: "/admin-panel",
  },
  {
    title: "Messages",
    icon: <MdOutlineMessage />,
    link: "/admin-panel/messages",
  },
  {
    title: "Bookmarks",
    icon: <Bookmark />,
    link: "/admin-panel/bookmarks",
  },
  {
    title: "Team",
    icon: <Users />,
    link: "/admin-panel/staff",
  },
]
const manage = [
  {
    title: "Jobs",
    icon: <IoBriefcaseOutline />,
    link: "/admin-panel/jobs",
  },
  {
    title: "Talents",
    icon: <Workflow />,
    link: "/admin-panel/talents",
  },
  {
    title: "Users",
    icon: <FaPeopleRoof />,
    link: "/admin-panel/users",
  },
  {
    title: "Tasks",
    icon: <FaTasks />,
    link: "/admin-panel/staff",
  },
]
const account = [
  {
    title: "Settings",
    icon: <Settings />,
    link: "/admin-panel/settings",
  },
  {
    title: "My Profile",
    icon: <User />,
    link: "/admin-panel/profile",
  },
  {
    title: "Help",
    icon: <HelpCircle />,
    link: "/admin-panel/staff",
  },
]

const SidebarComp = () => {
  const [collapsed, setCollapsed] = useState(false) // State for managing collapse/expand
  const { user, handleLogout } = useUser()
  const pathname = usePathname()

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  // const handleLogout = () => {
  //   // Use the clearUserData function from context
  //   clearUserData()

  //   router.push("/")
  // }

  return (
    <div
      className={`h-screen sticky top-0 left-0 ${
        collapsed ? "sm:w-[60px]" : "sm:w-[300px]"
      } bg-dark-card dark:text-text transition-all`}>
      <div className="flex w-full justify-between items-center h-[60px] border-r px-1 border-b border-gray-200 dark:border-gray-600">
        <Link href="/" className="flex items-center ml-2">
          <Image width={26} height={26} src="/logo-mobile.png" alt="LOGO" />
          {!collapsed && (
            <h1 className="text-secondaryGreen text-[20px] font-semibold">
              SOMDELIE
            </h1>
          )}
        </Link>
        <button onClick={toggleSidebar}>
          {collapsed ? <ChevronRight className="ml-1" /> : <ChevronLeft />}
        </button>
      </div>
      <div className="mt-4">
        {collapsed ? "" : <Heading title="Main" />}
        <div className="flex flex-col gap-2">
          {main?.map((link, i) => (
            <Link
              key={i}
              href={link?.link}
              className={
                link.link === pathname
                  ? "border-l-4 flex items-center gap-2 px-6 py-2  dark:bg-dark-main border-secondaryGreen transition"
                  : "hover:border-l-4 flex items-center gap-2 px-6 py-2  hover:bg-dark-main border-secondaryGreen transition"
              }>
              {!collapsed && link?.icon}
              {!collapsed && <span>{link?.title}</span>}
              {collapsed && <span>{link?.icon}</span>}
            </Link>
          ))}
        </div>
      </div>
      <hr className="mt-2 mx-2 border-dark-light" />
      <div className="mt-4">
        {collapsed ? "" : <Heading title="Organize and Manage" />}
        <div className="flex flex-col gap-2">
          {manage?.map((link, i) => (
            <Link
              key={i}
              href={link?.link}
              className={
                link.link === pathname
                  ? "border-l-4 flex items-center gap-2 px-6 py-2  dark:bg-dark-main border-secondaryGreen transition"
                  : "hover:border-l-4 flex items-center gap-2 px-6 py-2  hover:bg-dark-main border-secondaryGreen transition"
              }>
              {!collapsed && link?.icon}
              {!collapsed && <span>{link?.title}</span>}
              {collapsed && <span>{link?.icon}</span>}
            </Link>
          ))}
        </div>
      </div>
      <hr className="mt-2 mx-2 border-dark-light" />
      <div className="mt-4">
        {collapsed ? "" : <Heading title="Account" />}
        <div className="flex flex-col gap-2">
          {account?.map((link, i) => (
            <Link
              key={i}
              href={link?.link}
              className={
                link.link === pathname
                  ? "border-l-4 flex items-center gap-2 px-6 py-2  dark:bg-dark-main border-secondaryGreen transition"
                  : "hover:border-l-4 flex items-center gap-2 px-6 py-2  hover:bg-dark-main border-secondaryGreen transition"
              }>
              {!collapsed && link?.icon}
              {!collapsed && <span>{link?.title}</span>}
              {collapsed && <span>{link?.icon}</span>}
            </Link>
          ))}
        </div>
      </div>
      <button
        className="flex items-center gap-2 px-6 py-2 mt-3"
        onClick={handleLogout}>
        <PowerCircle />
        {collapsed ? "" : "Logout"}
      </button>
    </div>
  )
}

export default SidebarComp

// <div className="">
// <Heading title='Main'/>
// </div>
// <div className="">
// <Heading title='Organize and Manage'/>

// <div className="">
// <Heading title='Account'/>

// </div>
