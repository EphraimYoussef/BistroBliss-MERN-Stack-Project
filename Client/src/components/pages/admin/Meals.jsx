import MealsList from "./MealsList"
import MealForm from "./MealForm"
import { Playfair_Display } from "next/font/google"


const playFairDisplay_Font = Playfair_Display({ 
  subsets: ['latin'] ,
  style: 'italic',
})
const Meals = () => {

  return (
    <div className="bg-white shadow overflow-hidden rounded-lg w-full">

      <div className="px-4 py-5 sm:px-6 bg-[#F9F9F7]">
        <h3 className="text-lg leading-6 font-semibold text-gray-900">
          <span className={playFairDisplay_Font.className} >Meals</span>
        </h3>
      </div>

      <MealsList />

      <MealForm />
      
    </div>
  )
}

export default Meals