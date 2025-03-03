import { isTokenValid } from "@/lib/auth";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const addMeal = async (data) => {
  if (!isTokenValid()) {
    await logout();
    window.location.href = '/';
    return null;
  }
  try {
    const response = await fetch(`${API_URL}/meals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        image: data.image
      })
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong. Please try again.');
    }

    setInterval(() => {
      window.location.reload();
    }, 2500);

    return await result.data.meal;
  }catch (error) {
    throw new Error(error.message);
  }
}


export { 
  addMeal,
};