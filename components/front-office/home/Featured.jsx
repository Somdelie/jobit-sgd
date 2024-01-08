import React from "react"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import { Card } from "flowbite-react"
import Image from "next/image"

const featuredCards = [
  {
    icon: "/resume.png",
    title: "Post a job",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "/web-development.png",
    title: "Choose freelancers",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "/cyber-security.png",
    title: "Pay safely",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
  {
    icon: "/customer-service.png",
    title: "We’re here to help",
    desc: "It’s free and easy to post a job. Simply fill in a title, description.",
  },
]

const Featured = () => {
  return (
    <section className=" mt-6 border-t dark:border-dark-light border-gray-400 py-4">
      <div className="text-center">
        <Heading title="Need something done?" />
        <Paragraph
          title="Most viewed and all-time top-selling services"
          className="mt-2 "
        />
      </div>
      <div className="grid grid-cols-4 w-full gap-2 mt-3">
        {featuredCards?.map((card, i) => (
          <Card key={i} className="transition">
            <Image width={40} height={40} src={card?.icon} alt="LOGO" />
            <h1 className="dark:text-text">{card?.title}</h1>
            <Paragraph title={card?.desc} />
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Featured
