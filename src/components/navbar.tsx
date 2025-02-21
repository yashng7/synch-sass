import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight, Github } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { ModeToggle } from "./mode-toggle"

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-slate-950 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold text-brand-500">
            Synch
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    Sign out
                  </Button>
                </SignOutButton>

                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                  })}
                >
                  <span className="text-white">Dashboard </span>
                  <ArrowRight className="ml-1.5 size-4 text-white" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign in
                </Link>

                <div className="h-8 w-px bg-gray-200" />

                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "flex items-center gap-1.5 dark:text-gray-100 text-white",
                  })}
                >
                  Sign up <ArrowRight className="size-4" />
                </Link>
              </>
            )}
            <Button size="icon" variant="outline">
              <Link href="https://github.com/yashng7/synch-sass.git" target="blank">
              <Github className="w-4 h-4 dark:text-brand-100" />
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
