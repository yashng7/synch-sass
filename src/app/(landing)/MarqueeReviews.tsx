import { cn } from "@/utils"
import Marquee from "@/components/ui/marquee"
import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Freya Larsson",
    username: "@itsfreya",
    body: "Synch has been a game-changer for me. I've been using it for two months now and seeing sales pop up in real-time is super satisfying.",
    img: "/user-2.png",
  },
  {
    name: "Kai Durant",
    username: "@kdurant_",
    body: "Synch's been paying off for our SaaS. Nice to have simple way to see how we're doing day-to-day. Definitely makes our lives easier.",
    img: "/user-1.png",
  },
  {
    name: "Liam Johnson",
    username: "@liam_j",
    body: "Using Synch has streamlined our workflow significantly. The real-time updates are incredibly useful for tracking our progress.",
    img: "/user-3.png",
  },
  {
    name: "Ava Smith",
    username: "@ava_smith",
    body: "Synch has been a fantastic tool for our team. The real-time insights have helped us make better decisions faster.",
    img: "/user-4.png",
  },
  {
    name: "Noah Brown",
    username: "@noah_b",
    body: "We've seen a noticeable improvement in our efficiency since we started using Synch. It's a must-have for any business.",
    img: "/user-5.png",
  },
]

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2))
const secondRow = reviews.slice(Math.ceil(reviews.length / 2))

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-950/[.1] bg-brand-25 hover:bg-brand-50",
        "dark:border-gray-50/[.1] dark:bg-gray-800 dark:hover:bg-gray-700"
      )}
    >
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-5 text-brand-600 fill-brand-600" />
        ))}
      </div>
      <blockquote className="mt-2 text-base font-medium tracking-tight text-brand-950 dark:text-white">
        {body}
      </blockquote>
      <div className="flex items-center gap-4 mt-4">
        <Image
          src={img}
          className="rounded-full object-cover"
          alt={`${name}'s profile picture`}
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white flex items-center">
            {name}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-4 inline-block ml-1.5 text-brand-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </figcaption>
          <p className="text-sm text-gray-600 dark:text-gray-400">{username}</p>
        </div>
      </div>
    </figure>
  )
}

export function MarqueeReviews() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  )
}
