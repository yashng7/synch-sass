"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Battery,
  Gift,
  Mic,
  Phone,
  PlusCircle,
  Signal,
  SmilePlus,
  Video,
  Wifi,
} from "lucide-react"

export default function SaleNotification() {
  return (
    <div className="w-full max-w-md mx-auto h-screen flex flex-col bg-zinc-900 text-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <span>21:45 ☾</span>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
        <Button variant="ghost" size="icon" className="text-zinc-400">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Synch</span>
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
              APP
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-zinc-400">
          <Phone className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-400">
          <Video className="w-5 h-5" />
        </Button>
      </div>

      {/* Chat Content */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Sale Notification Card */}
        <div className="relative overflow-hidden bg-zinc-800 rounded-md">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500" />
          <div className="p-2 space-y-1 tracking-tight">
            <div className="flex items-center gap-1 ">
              <span className="text-yellow-500 text-xl">💰</span>
              <span className="text-xl font-semibold">Sale</span>
            </div>
            <p className="text-zinc-300">A new sale event has occurred!</p>
            <div className="space-y-2">
              <div>
                <div className="text-zinc-400">Plan</div>
                <div>Premium</div>
              </div>
              <div>
                <div className="text-zinc-400">Email</div>
                <div>user@gmail.com</div>
              </div>
              <div>
                <div className="text-zinc-400">Amount</div>
                <div>59.99</div>
              </div>
            </div>
            <div className="text-sm text-zinc-500">Today at 6:13 AM</div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-zinc-800 rounded-md">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500" />
          <div className="p-4 space-y-3 ">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">💰</span>
              <span className="text-xl font-semibold">Sale</span>
            </div>
            <p className="text-zinc-300">A new sale event has occurred!</p>
            <div className="space-y-2">
              <div>
                <div className="text-zinc-400">Plan</div>
                <div>Premium</div>
              </div>
              <div>
                <div className="text-zinc-400">Email</div>
                <div>user@gmail.com</div>
              </div>
              <div>
                <div className="text-zinc-400">Amount</div>
                <div>59.99</div>
              </div>
            </div>
            <div className="text-sm text-zinc-500">Today at 6:13 AM</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-zinc-800 space-y-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-zinc-800"
          >
            <PlusCircle className="w-5 h-5" />
          </Button>
          <Input
            className="bg-zinc-800 border-none rounded-full text-sm"
            placeholder="Message @Synch"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Gift className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <SmilePlus className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
