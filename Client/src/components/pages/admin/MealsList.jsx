"use client"
import React, { useEffect, useState } from 'react'
import SingleMeal from './SingleMeal'
import { getMeals } from '@/services/mealsServices'

const MealsList = () => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    const fetchMenuItems = async () => {
      const data = await getMeals();
      if (data) {
        setMenuItems(data);
      }
    }
    fetchMenuItems();
  }, [])

  return (
    <div className="border-t border-gray-200">

      <div className="divide-y divide-gray-200">
        {
          menuItems.map((item) => (
            <SingleMeal key={item._id} item={item}/>
          ))
        }
      </div>

    </div>
  )
}

export default MealsList