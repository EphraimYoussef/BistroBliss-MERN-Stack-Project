"use client"

import { useState, useEffect } from "react"
import { Playfair_Display } from "next/font/google"
import { getAllUsers } from "@/services/userServices"


const playFairDisplay_Font = Playfair_Display({
  subsets: ['latin'],
  style: 'italic',
})

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      if (data) {
        setUsers(data);
      }
    }

    fetchUsers();
  }, [])

  return (
    <div className="bg-white shadow overflow-hidden rounded-lg w-full">
      <div className="px-4 py-5 sm:px-6 bg-[#F9F9F7]">
        <h3 className="text-lg leading-6 text-gray-900 font-bold">
          <span className={playFairDisplay_Font.className} >Users</span>
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {
            users.map((user) => (
              <li key={user._id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-primary truncate">{user.username}</p>
                    <p className="text-sm text-gray-500 font-semibold">
                      {user.email}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full w-20 justify-center items-center
                      ${user.isAdmin ? "bg-green-100 text-green-800" : "bg-sky-100 text-sky-800"}`}>
                      {
                        user.isAdmin ?
                          "Admin"
                        :
                          "Customer"
                      }
                    </p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

