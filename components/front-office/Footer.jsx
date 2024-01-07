import { TextInput } from "flowbite-react"
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"

const leftLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Community",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
]

const centerLinks = [
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Jobs",
    link: "#",
  },
  {
    title: "Guides",
    link: "#",
  },
  {
    title: "Help center",
    link: "#",
  },
]

const rightLinks = [
  {
    title: "Talent",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
  },
  {
    title: "History",
    link: "#",
  },
  {
    title: "Schedule",
    link: "#",
  },
]

export const Footer = () => {
  const { handleSubmit, reset } = useForm()

  async function onSubmit(data) {
    reset()
    console.log(data)
  }

  return (
    <div className="px-[2%] md:px-[6%] mt-20 z-0">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Home</h2>
            <ul>
              {leftLinks.map((link, index) => (
                <li
                  className="my-3 text-muted dark:text-gray-500 hover:text-secondaryGreen transition"
                  key={index}>
                  <Link href={link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold">Resources</h2>
            <ul>
              {centerLinks.map((link, index) => (
                <li
                  className="my-3 text-muted dark:text-gray-500 hover:text-secondaryGreen transition"
                  key={index}>
                  <Link href={link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold">Main Links</h2>
            <ul>
              {rightLinks.map((link, index) => (
                <li
                  className="my-3 text-muted dark:text-gray-500 hover:text-secondaryGreen transition"
                  key={index}>
                  <Link href={link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 basis-[10rem] text-sm text-center">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-muted text-13">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="flex-align-center justify-center my-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full bg-red-300">
                <TextInput
                  type="email"
                  icon={Mail}
                  placeholder="name@somdelie.com"
                  required
                  className="flex-3 w-full"
                />
                <button className="bg-secondaryGreen text-secondaryLightPurple hover:opacity-70 px-4 py-2 flex-1">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex items-center justify-center gap-5 my-6">
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="attribution pt-2 border-t-2 flex items-center justify-center border-t-secondaryLightPurple">
        <p className="text-center  text-muted pb-2">
          Created By{" "}
          <span className="text-secondaryGreen">Somdelie Graphics</span> | All
          Rights Reserved
        </p>
      </section>
    </div>
  )
}
