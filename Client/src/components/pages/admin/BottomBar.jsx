import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Users } from 'lucide-react'
import { IoFastFoodOutline } from "react-icons/io5";
import { MdPendingActions } from "react-icons/md";
const menuItems = [
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: IoFastFoodOutline, label: 'Meals', href: '/admin/meals' },
  { icon: MdPendingActions, label: 'Pending Bookings', href: '/admin/pending' },
]

const  BottomBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#f4f4f4] border-t md:hidden">
      <div className="flex justify-between">
        {menuItems.map((item) => (
          <div key={item.label} className='border-r w-1/3'>
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-3"
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </a>
            </Button>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default BottomBar