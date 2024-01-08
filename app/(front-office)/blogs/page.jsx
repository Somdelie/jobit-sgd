"use client"
import LoadMore from "@/components/ui/LoadMore"
import { CircularProgress } from "@mui/material"
import { Avatar, Dropdown } from "flowbite-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useEffect, useRef, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { useInView } from "react-intersection-observer"
import { HiDotsVertical } from "react-icons/hi"
import { IoIosShareAlt } from "react-icons/io"

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const Blogs = () => {
  const [loadedCards, setLoadedCards] = useState(8) // Tracks the number of loaded cards
  const { ref, inView } = useInView()
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      user: {
        name: "Nomzy",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Mar 22, 2023",
      timeDuration: "2 min",
      heading: "Cooking with the kids",
      desc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and",
      views: 37,
      comments: 100,
      likes: 0,
      image: "/blog1.jpg", // Replace with the path to the blog image
    },
    {
      id: 2,
      user: {
        name: "Alice",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Apr 15, 2023",
      timeDuration: "1 hour",
      heading: "Baking Adventures",
      desc: "Exploring the art of baking through delightful stories and mouthwatering recipes",
      views: 45,
      comments: 80,
      likes: 50,
      image: "/baking.jpg", // Replace with the path to the blog image
    },
    {
      id: 3,
      user: {
        name: "Mark",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Jun 5, 2023",
      timeDuration: "30 min",
      heading: "Travel Diaries",
      desc: "Embark on a journey through picturesque landscapes and captivating travel tales",
      views: 60,
      comments: 120,
      likes: 400,
      image: "/travel.jpg",
    },
    {
      id: 4,
      user: {
        name: "Sophie",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Jul 18, 2023",
      timeDuration: "3 hours",
      heading: "Gardening Tips",
      desc: "Discover gardening secrets and tips for cultivating a vibrant and lush garden",
      views: 55,
      comments: 90,
      likes: 280,
      image: "/gardening.jpg",
    },
    {
      id: 5,
      user: {
        name: "Ryan",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Aug 9, 2023",
      timeDuration: "1 day",
      heading: "Fitness Journey",
      desc: "Follow a fitness enthusiast's journey towards a healthier lifestyle and workout routines",
      views: 75,
      comments: 110,
      likes: 320,
      image: "/fitness.jpg",
    },
    {
      id: 6,
      user: {
        name: "Lena",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Sep 30, 2023",
      timeDuration: "10 min",
      heading: "Artistic Expression",
      desc: "Dive into the world of artistry and creative endeavors through captivating visual stories",
      views: 50,
      comments: 70,
      likes: 200,
      image: "/artistic.jpg", // Replace with the path to the blog image
    },
    {
      id: 7,
      user: {
        name: "Ella",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Oct 12, 2023",
      timeDuration: "20 min",
      heading: "Nature's Beauty",
      desc: "Explore the breathtaking beauty of untouched nature and serene landscapes",
      views: 42,
      comments: 88,
      likes: 270,
      image: "/artistic.jpg",
    },
    {
      id: 8,
      user: {
        name: "David",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Nov 5, 2023",
      timeDuration: "4 days",
      heading: "Tech Innovations",
      desc: "Discover the latest technological advancements shaping the future",
      views: 63,
      comments: 92,
      likes: 310,
      image: "/artistic.jpg",
    },
    {
      id: 9,
      user: {
        name: "Grace",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Dec 20, 2023",
      timeDuration: "1 week",
      heading: "Healthy Eating Habits",
      desc: "Learn about healthy eating habits and nutritious meal plans",
      views: 51,
      comments: 105,
      likes: 290,
      image: "/artistic.jpg",
    },
    {
      id: 10,
      user: {
        name: "Oliver",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Jan 8, 2024",
      timeDuration: "1 hour",
      heading: "DIY Home Decor",
      desc: "Get inspired by creative DIY home decor ideas and interior designs",
      views: 58,
      comments: 78,
      likes: 270,
      image: "/artistic.jpg",
    },
    {
      id: 11,
      user: {
        name: "Sophia",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Feb 14, 2024",
      timeDuration: "3 weeks",
      heading: "Fashion Trends",
      desc: "Stay updated with the latest fashion trends and style inspirations",
      views: 67,
      comments: 85,
      likes: 320,
      image: "/artistic.jpg",
    },
    {
      id: 12,
      user: {
        name: "Nathan",
        profileImg: "/avatar-3.png",
      },
      dateCreated: "Mar 30, 2024",
      timeDuration: "1 month",
      heading: "Music World",
      desc: "Explore the diverse world of music genres and new artists",
      views: 49,
      comments: 70,
      likes: 250,
      image: "/artistic.jpg",
    },
  ]) // Your existing blogs array state
  const [likedPosts, setLikedPosts] = useState([]) // State to keep track of liked posts

  const handleLike = (postId) => {
    // Check if the post is already liked
    const alreadyLiked = likedPosts.includes(postId)

    if (alreadyLiked) {
      // Unlike the post
      const updatedLikedPosts = likedPosts.filter((id) => id !== postId)
      setLikedPosts(updatedLikedPosts)
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === postId ? { ...blog, likes: blog.likes - 1 } : blog
        )
      )
    } else {
      // Like the post
      setLikedPosts([...likedPosts, postId])
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === postId ? { ...blog, likes: blog.likes + 1 } : blog
        )
      )
    }
  }

  const loadMore = () => {
    setLoadedCards((prevLoadedCards) => prevLoadedCards + 8)
  }

  useEffect(() => {
    if (inView) {
      loadMore()
    }
  }, [inView])

  return (
    <div className="max-w-[80%] pt-4 mx-auto dark:text-text">
      <h2 className="blogText text-3xl underline">
        Explore What People Say About Life
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3">
        {blogs?.slice(0, loadedCards)?.map((blog, index) => (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
            className="max-w-sm bg-white border rounded-t-[10px] border-gray-200 rounded-lg shadow dark:bg-dark-card dark:border-gray-700 flex flex-col justify-between"
            key={blog.id}>
            <Link href="#" className="">
              <div className=" h-[200px] rounded-t-lg">
                <Image
                  width={500}
                  height={500}
                  className=" object-cover rounded-t-[10px] w-full h-full"
                  src={blog?.image}
                  alt=""
                />
              </div>
            </Link>
            <div className="p-5">
              <div className="inline-flex items-center text-sm justify-between w-full">
                <div className="flex gap-2 items-center">
                  <Avatar img={blog.user?.profileImg} alt="" rounded />
                  <div className="">
                    <span>{blog.user?.name}</span>
                    <span className="flex gap-2">
                      {blog.dateCreated} . {blog.timeDuration}
                    </span>
                  </div>
                </div>
                <Dropdown
                  className="bg-transparent"
                  label={<HiDotsVertical />}
                  placement="left-start"
                  arrowIcon={false}>
                  <Dropdown.Item>
                    <IoIosShareAlt /> Share Post
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div className="">
                <h5 class="mb-2 text-lg tracking-tight dark:text-text">
                  {blog?.heading}
                </h5>
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-600">
                  {blog?.desc.length > 100
                    ? `${blog?.desc.slice(0, 100)}...`
                    : blog?.desc}
                </p>
              </div>
            </div>
            <div className="p-5">
              <hr />
              <div className="inline-flex items-center px-3 py-2 text-sm text-blue-500 justify-between w-full">
                <span className="flex text-xs items-center gap-3">
                  <p>{blog?.views} views</p>
                  <p>{blog?.comments} comments</p>
                </span>
                <div className="flex gap-2 items-center">
                  {blog?.likes > 0 && <p className="text-xs">{blog?.likes}</p>}
                  <button onClick={() => handleLike(blog.id)}>
                    {likedPosts.includes(blog.id) ? (
                      <FaHeart style={{ color: "#ff6d75" }} />
                    ) : (
                      <FaRegHeart style={{ color: "#ff6d75" }} />
                    )}
                  </button>
                </div>
              </div>
              {/* <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-[10px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link> */}
            </div>
          </motion.div>
        ))}
      </div>
      {loadedCards < blogs.length && (
        <div
          ref={ref}
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "10px",
          }}>
          <CircularProgress />
        </div>
      )}
    </div>
  )
}

export default Blogs
