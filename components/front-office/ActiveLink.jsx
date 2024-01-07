import Link from "next/link"
import { useRouter } from "next/navigation"

const ActiveLink = ({ href, children }) => {
  const router = useRouter()

  // Use the pathname of the current route to determine if the link should be active
  const isActive = router.pathname === href

  return (
    <Link href={href}>
      <span className={` ${isActive ? "text-red" : ""}`}>{children}</span>
    </Link>
  )
}

export default ActiveLink
