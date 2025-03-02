"use client"

import { useState, useEffect } from "react"
import { Playfair_Display } from "next/font/google"
import PendingItem from "@/atoms/PendingITem"
import { getPendingBookings } from "@/services/bookingServices"
import { format, parse } from "date-fns"

const playFairDisplay_Font = Playfair_Display({ 
  subsets: ["latin"],
  style: "italic",
})
const PendingList = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getPendingBookings();
      if (data) {
        setBookings(data);
      }
    }

    fetchBookings();
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
            <li key={booking._id} className="px-4  sm:px-6">
              <PendingItem 
                key={booking._id} 
                bookingId={booking._id}
                name={booking.name} 
                date={format(new Date(booking.date), "PPP")} 
                time={format(parse(booking.time, "HH:mm", new Date()), "hh:mm a")} 
                status={booking.status} phone={booking.phone} 
                totalPerson={booking.capacity} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default PendingList