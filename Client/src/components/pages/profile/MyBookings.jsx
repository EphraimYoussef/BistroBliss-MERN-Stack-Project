import BookingItem from "@/atoms/BookingItem"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Playfair_Display } from 'next/font/google'

const playFairDisplay_Font = Playfair_Display({ subsets: ['latin'] })

const MyBookings = () => {
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
                <BookingItem 
                name="EVRA" 
                date="MArch 15, 2025" 
                time="8:00 PM"
                totalPerson="5+"
                phone="+201551220618"
                email="evra@gmail.com"
                status="Accepted" />
                <BookingItem 
                name="EVRA" 
                date="May 15, 2025" 
                time="5:00 PM"
                totalPerson="1"
                phone="+201551220618"
                email="evra@gmail.com"
                status="Rejected" />
                <BookingItem 
                name="EVRA" 
                date="June 15, 2025" 
                time="3:00 PM"
                totalPerson="3"
                phone="+201551220618"
                email="evra@gmail.com"
                status="Pending" />
              </div>
            </CardContent>
          </Card>
    )
}

export default MyBookings