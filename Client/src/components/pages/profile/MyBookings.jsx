"use client"
import BookingItem from "@/atoms/BookingItem"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getUserBookings } from "@/services/bookingServices"
import { format, parse } from "date-fns"
import { Playfair_Display } from 'next/font/google'
import { useEffect, useState } from "react"

const playFairDisplay_Font = Playfair_Display({ subsets: ['latin'] })

const MyBookings = () => {
  const [booking, setBooking] = useState([])
  useEffect(() => {
    const getBookings = async () => {
      const data = await getUserBookings();
      if (data) {
        setBooking(data);
      }
    }
    getBookings();
  },[])

  return (
    <Card>
        <CardHeader>
          <CardTitle  className={ playFairDisplay_Font.className } >
            <span className="font-semibold tracking-wide" >My Bookings</span>
          </CardTitle>
          <CardDescription>View and manage your current bookings.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {
              booking.map((booking) => (
                <BookingItem 
                  key={booking._id}
                  name={booking.name} 
                  date={format(new Date(booking.date), "PPP")} 
                  time={format(parse(booking.time, "HH:mm", new Date()), "hh:mm a")}
                  totalPerson={booking.totalPerson}
                  phone={booking.phone}
                  status={booking.status} />
              ))
            }
          </div>
        </CardContent>
    </Card>
  )
}

export default MyBookings