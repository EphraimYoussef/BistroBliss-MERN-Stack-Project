import { isTokenValid } from "@/lib/auth";
import Cookies from "js-cookie";
import { logout } from "./userServices";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const createBooking = async (bookingData) => {
  if (!isTokenValid()) {
    await logout();
    window.location.href = '/';
    return null;
  }

  try {
    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        name: bookingData.name,
        phone: bookingData.phone,
        date: bookingData.date,
        time: bookingData.time,
        capacity: bookingData.totalPerson
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Could not book a table: ${error.message}`);
  }
}

export{
  createBooking
}