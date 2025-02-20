"use client"

import { useState, useEffect } from "react"
import { Playfair_Display } from "next/font/google"
import PendingItem from "@/atoms/PendingITem"

const playFairDisplay_Font = Playfair_Display({ 
  subsets: ["latin"],
  style: "italic",
})
const PendingList = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    // ? Fetch bookings from API
    // ! This is a mock implementation
    setBookings([
      { id: 1, name: "John Doe", date: "2023-06-01", time: "19:00", status: "pending" , phone: "+201551220618", email: "evra@gmail.com", totalPerson: "5+"},
      { id: 2, name: "Jane Smith", date: "2023-06-02", time: "20:00", status: "accepted" , phone: "+201551220618", email: "evra@gmail.com", totalPerson: "5+"},
    ])
  }, [])

  return (
    <div className="bg-white shadow overflow-hidden rounded-lg w-full">
      <div className="px-4 py-5 sm:px-6 bg-[#F9F9F7]">
        <h3 className="text-lg leading-6 text-gray-900 font-semibold">
          <span className={playFairDisplay_Font.className} >Pending Bookings </span>
        </h3>
      </div>

      <div className="border-t border-gray-200">
        <ul className=" flex flex-col gap-5 py-5" >
          {bookings.map((booking) => (
            <li key={booking.id} className="px-4  sm:px-6">
              <PendingItem name={booking.name} date={booking.date} time={booking.time} status={booking.status} phone={booking.phone} email={booking.email} totalPerson={booking.totalPerson} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default PendingList