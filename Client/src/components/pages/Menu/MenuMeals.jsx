import MealCard from '@/atoms/MealCard'
import React from 'react'

const MenuMeals = () => {
	return (
		<div className='container mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-8 m-10'>
			<MealCard />
			<MealCard />
			<MealCard />
			<MealCard />
			<MealCard />
			<MealCard />
			<MealCard />
			<MealCard />
		</div>
	)
}

export default MenuMeals