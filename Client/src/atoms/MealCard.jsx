import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

const MealCard = () => {
	return (
		<Card className='max-w-xs mx-auto rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#F9F9F7] overflow-hidden'>
			<CardContent className='flex flex-col items-center gap-6 h-[400px] p-0'>
				<img src="https://thispersondoesnotexist.com/" alt="" className='h-1/2 w-full'/>
				<section className='flex items-center flex-col h-1/2 gap-5'>
					<CardTitle className="text-primary">$15.99</CardTitle>
					<CardTitle>Card Title</CardTitle>
					<CardDescription className='text-center'>Made with eggs, lettuce, salt, oil and other ingredients.</CardDescription>
				</section>
			</CardContent>
		</Card>
	)
}

export default MealCard