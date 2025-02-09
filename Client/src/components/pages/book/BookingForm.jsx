"use client"

import { useState } from 'react'
import { CalendarIcon, ClockIcon, ChevronDownIcon } from 'lucide-react'
import { format } from "date-fns"
import InputMask from "react-input-mask"
import { IMaskInput } from "react-imask";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'

export default function BookingForm() {
  const [date, setDate] = useState()
  const [time, setTime] = useState('06:30 PM')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [totalPerson, setTotalPerson] = useState('1 Person')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log({ date, time, name, phone, totalPerson })
  // }

  return (
    <div className='bg-[#F9F9F7] min-h-screen flex flex-col justify-around items-center'>
      <img src="book/title.svg" alt="" className='p-5'/>
      <div className="w-full max-w-2xl mx-auto p-10 m-10 bg-white rounded-xl shadow-lg">
        <form  className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    id="date"
                    className={`w-full px-4 py-2 text-left border relative border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      !date && "text-gray-400"
                    }`}
                  >
                    {date ? format(date, "PPP") : "Select a date"}
                    <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="relative">
                <IMaskInput
                  type = 'tel'
                  mask = "0000 000 0000"
                  id='phone'
                  value = {phone}
                  onChange = {(e) => setPhone(e.target.value)}
                  placeholder = "0123 456 7890"
                  className = "w-full px-4 py-2 border border-gray-300 rounded-full "
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="totalPerson" className="block text-sm font-medium text-gray-700">
              Total Person
            </label>
            <div className="relative">
              <select
                id="totalPerson"
                value={totalPerson}
                onChange={(e) => setTotalPerson(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full px-4 py-3 font-semibold rounded-full text-white"
          >
            Book A Table
          </Button>
        </form>
      </div>
    </div>

  )
}