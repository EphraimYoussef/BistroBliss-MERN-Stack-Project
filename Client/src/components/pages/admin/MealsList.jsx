"use client"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
const defaultImage = "https://thispersondoesnotexist.com/"

const MealsList = () => {
  const [menuItems, setMenuItems] = useState([])

    const handleUpdateItem = (id, field , value) => {
      setMenuItems(menuItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
    }
  
    const handleDeleteItem = (id) => {
      setMenuItems(menuItems.filter((item) => item.id !== id))
    }



    useEffect(() => {
        // Fetch menu items from API
        // This is a mock implementation
        setMenuItems([
          {
            id: "1",
            name: "Pancakes",
            description: "Fluffy pancakes with maple syrup",
            price: 8,
            image: defaultImage,
            category: "Breakfast",
          },
          {
            id: "2",
            name: "Spaghetti Bolognese",
            description: "Classic Italian pasta dish",
            price: 12,
            image: defaultImage,
            category: "Main Dishes",
          },
        ])
      }, [])

  return (
    <div className="border-t border-gray-200">

        <ul className="divide-y divide-gray-200">
          {
            menuItems.map((item) => (
              <li key={item.id} className="px-4 py-4 sm:px-6">
                <div className='flex flex-col'>

                  <div className="flex items-center justify-between max-h-fit max-lg:flex-col ">

                    <div className="flex flex-col w-1/2 gap-2 p-3 max-lg:order-2 max-lg:w-full">
                      <Label className="text-sm text-gray-500 mr-2">Name:</Label>
                      <input
                        type="text"
                        placeholder='Name'
                        value={item.name}
                        onChange={(e) => handleUpdateItem(item.id, "name", e.target.value)}
                        className="text-sm font-medium text-primary mb-1 w-full border border-gray-200 rounded p-1"
                      />

                      <Label className="text-sm text-gray-500 mr-2">Description:</Label>
                      <textarea
                        type="text"
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) => handleUpdateItem(item.id, "description", e.target.value)}
                        className="text-sm  text-gray-500 mb-1 w-full border border-gray-200 rounded p-1"
                      />

                      <Label className="text-sm text-gray-500 mr-2">Price:</Label>
                      <input
                        type="number"
                        placeholder="Price"
                        value={item.price}
                        onChange={(e) => handleUpdateItem(item.id, "price", Number.parseFloat(e.target.value))}
                        className="text-sm text-gray-500 mb-1 w-full border border-gray-200 rounded p-1"
                      />
                      <Label className="text-sm text-gray-500" htmlFor="image">Image URL</Label>
                      <input
                        type="text"
                        placeholder="Image URL"
                        value={item.image}
                        onChange={(e) => handleUpdateItem(item.id, "image", e.target.value)}
                        className="text-sm  text-gray-500 mb-1 w-full border border-gray-200 rounded p-1"
                        />
                      <Label className="text-sm text-gray-500 mr-2">Category:</Label>
                      <select
                        value={item.category}
                        onChange={(e) => handleUpdateItem(item.id, "category", e.target.value)}
                        className="text-sm text-gray-500 mb-1 w-full rounded border border-gray-200 p-1"
                      >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Main Dishes">Main Dishes</option>
                        <option value="Desserts">Desserts</option>
                      </select>
                    </div>


                    <div className="flex-shrink-0 flex ml-4 w-1/2 justify-center items-center max-lg:order-1 max-lg:w-full">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="object-contain rounded w-2/3 h-2/3"
                      />
                    </div>

                  </div>

                  <div className="flex gap-3 px-5 max-lg:justify-center max-lg:items-center">
                    <Button className="mt-2 px-5 py-2 text-xs font-semibold rounded-lg text-primary bg-[#F9F9F7] hover:text-primary-dark" 
                    onClick={() => handleUpdateItem(item.id)}
                    variant="outline">
                      Update
                    </Button>
                    <Button className="mt-2 px-5 py-2 text-xs font-semibold rounded-lg"
                    onClick={() => handleDeleteItem(item.id)}
                    variant="destructive">
                      Delete
                    </Button>
                  </div>

                </div>
              </li>
            ))
          }
        </ul>

      </div>
  )
}

export default MealsList