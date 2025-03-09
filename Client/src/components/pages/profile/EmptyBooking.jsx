import { CalendarX } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";
import Link from "next/link";

const EmptyBooking = () => {

  return (
    <div className="flex flex-col h-96 items-center justify-center text-center w-full 
      mx-auto p-8 space-y-6 border rounded-3xl bg-[#F9F9F7] shadow-md">
      
      <CalendarX className="h-20 w-20 text-primary animate-bounce" />

      <div className="space-y-2">
        <h3 className="text-2xl font-medium text-gray-700">No Bookings Found</h3>
        <p className="text-sm text-gray-500">
          You haven't made any reservations yet. Book a table now and enjoy your food experience!
        </p>
      </div>

      <Button className="bg-primary text-white px-6 py-3 rounded-full activeButtonStyle">
        <Link href="/book">
          Book a Table
        </Link>
      </Button>
    </div>
  );
};

export default EmptyBooking;
