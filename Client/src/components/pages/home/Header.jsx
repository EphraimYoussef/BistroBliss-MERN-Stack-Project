import { Button } from '@/components/ui/button'
import React from 'react'

const Header = () => {
	return (
		<div className='h-dvh flex justify-center items-center bg-[url("/header/header.png")] bg-cover bg-no-repeat'>
			<div className='flex flex-col justify-center items-center gap-5'>
				<img src="/header/text.svg" alt="" />
				<div className='flex justify-around items-center w-2/3'>
					<Button className="rounded-full w-40 h-14 text-white text-base">Book A Table</Button>
					<Button variant='outline' className="rounded-full w-40 h-14 text-base">Explore Menu</Button>
				</div>
			</div>
		</div>
	)
}

export default Header