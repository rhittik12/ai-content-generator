"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Home, LucideFileClock, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import UsageTrack from './UsageTrack'
import { UserButton } from '@clerk/nextjs'

function SideNav() {
  const MenuList = [
    { name: 'Home', icon: Home, path: '/dashboard/' },
    { name: 'History', icon: LucideFileClock, path: '/dashboard/history' },
    { name: 'Setting', icon: Settings, path: '/dashboard/settings' }
  ]

  const path = usePathname()

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      {/* Logo */}
      <div className="p-2 flex justify-center">
        <Link href="/dashboard/">
          <Image src="/logo.svg" alt="logo" width={160} height={100} />
        </Link>
      </div>

      <hr className="my-6 border" />

      {/* Profile */}
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-1 p-3">
          <UserButton />
          <h2 className="text-lg">Profile</h2>
        </div>

        {/* Menu */}
        {MenuList.map((menu) => {
          const isActive = path === menu.path || path.startsWith(menu.path)
          return (
            <Link key={menu.path} href={menu.path}>
              <div
                className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                  isActive ? 'bg-primary text-white' : ''
                }`}
              >
                <menu.icon className="h-6 w-6" />
                <h2 className="text-lg">{menu.name}</h2>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Usage tracker */}
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  )
}

export default SideNav
