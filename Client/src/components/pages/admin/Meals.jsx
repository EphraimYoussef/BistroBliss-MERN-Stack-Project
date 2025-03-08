import MealsList from "./MealsList"
import MealForm from "./MealForm"
import { Playfair_Display } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import "../../../app/globals.css"

const playFairDisplay_Font = Playfair_Display({ 
  subsets: ['latin'] ,
  style: 'italic',
  weight: '700'
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

      <MealForm id={"AddMeal"}/>
      
      <Button 
        variant="default" 
        className="fixed bottom-5 right-5 z-50 shadow-lg text-white p-3 activeButtonStyle"
        title="Add Meal"
        > 
        <Link href={"#AddMeal"}>
          <Plus className="h-7 w-7" />
        </Link>
      </Button>

    </div>
  )
}

export default Meals