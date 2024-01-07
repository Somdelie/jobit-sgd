import { Undo2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex-col min-h-screen text-center justify-center flex">
      <div className="-mt-20 image-wrapper">
        <Image
          src="/404.png"
          alt="404 image"
          layout="fill"
          className="mx-auto !relative !object-contain !h-[350px] !w-[350px]"
        />
      </div>
      <h1 className="text-6xl font-bold opacity-50">Page Not Found!!</h1>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="dark:bg-muted bg-dark-light flex items-center gap-2 hover:opacity-50 text-white dark:text-dark-light mx-auto rounded mt-8 px-4 py-2">
          <Undo2 /> Return Home
        </Link>
      </div>
    </div>
  )
}
