import React from 'react'

const PendingItem = ({ name, date, time , status , phone , email , totalPerson}) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg 
    max-md:flex-col max-md:justify-start max-md:items-start max-md:gap-5">
      <div>
        <h3 className="font-semibold text-primary">{name}</h3>
        <div className="flex flex-col">
          <p className="text-sm text-gray-500">
        <span className="font-semibold">Date: </span>
        {date}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Time: </span>
        {time}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Total Person: </span>
        {totalPerson} Person
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Phone: </span>
        {phone}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Email: </span>
        {email}
      </p>
    </div>
      </div>

      <div className="flex items-center gap-5 max-md:w-full max-md:justify-center">
        <button
          // onClick={() => handleBookingAction(id, "accept")}
          title='Accept this booking'
          className="mr-2 px-2 py-1 w-20 text-sm font-semibold rounded-full bg-green-100 text-green-800"
        >
          Accept
        </button>
        <button
          // onClick={() => handleBookingAction(booking.id, "reject")}
          title='Reject this booking'
          className="px-2 py-1 text-sm w-20 font-semibold rounded-full bg-red-100 text-red-800"
        >
          Reject
        </button>
      </div>
    </div>
  )
}

export default PendingItem