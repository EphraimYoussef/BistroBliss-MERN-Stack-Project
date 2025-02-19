"use client"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
const defaultImage = "https://thispersondoesnotexist.com/"

const MealForm = () => {
  const [menuItems, setMenuItems] = useState([])
      const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        price: 0,
        image: defaultImage,
        category: "Breakfast",
      })

  const handleAddItem = () => {
    const id = String(Math.max(0, ...menuItems.map((item) => Number.parseInt(item.id))) + 1)
    setMenuItems([...menuItems, { id, ...newItem }])
    setNewItem({ name: "", description: "", price: 0, image: defaultImage, category: "Breakfast" })
  }

  return (
    <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
        <h4 className="text-lg leading-6 font-medium text-gray-900">Add New Meal</h4>
        <div className="mt-2 grid grid-cols-1 gap-y-5 ">
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-gray-500" htmlFor="name">Name</Label>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="px-2 py-1 border rounded w-full"
          />
          </div>
          
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-gray-500" htmlFor="description">Description</Label>
            <textarea
              type="text"
              placeholder="Description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              className="px-2 py-1 border rounded w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm text-gray-500" htmlFor="price">Price</Label>
            <input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: Number.parseFloat(e.target.value) })}
              className="px-2 py-1 border rounded w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm text-gray-500" htmlFor="image">Image URL</Label>
            <input
              type="text"
              placeholder="Image URL"
              value={newItem.image}
              onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
              className="px-2 py-1 border rounded w-full"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-gray-500" htmlFor="category">Category</Label>
            <select
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              className="px-2 py-1 border rounded w-full"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Drinks">Drinks</option>
              <option value="Main Dishes">Main Dishes</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>
          
          <Button
            onClick={handleAddItem}
            className="px-2 py-1 mt-2 text-sm font-semibold rounded-full w-full text-white"
          >
            Add Meal
          </Button>
          
        </div>
      </div>
  )
}

export default MealForm