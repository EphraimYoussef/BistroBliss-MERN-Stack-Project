"use client"

import { useState, useEffect } from "react"

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // ? Fetch users from API
    // ! This is a mock implementation
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com" , isAdmin: true},
      { id: 2, name: "Jane Smith", email: "jane@example.com" , isAdmin: false},
    ])
  }, [])

  return (
    <div className="bg-white shadow overflow-hidden rounded-lg w-full">
      <div className="px-4 py-5 sm:px-6 bg-[#F9F9F7]">
        <h3 className="text-lg leading-6 font-medium text-gray-900"> Users </h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {
            users.map((user) => (
              <li key={user.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-primary truncate">{user.name}</p>
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

