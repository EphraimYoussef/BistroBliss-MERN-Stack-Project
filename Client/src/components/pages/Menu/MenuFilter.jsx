'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function MenuFilter() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts']

  return (
    <div className="w-full max-w-3xl mx-auto p-4 mt-10">
      <div className="flex flex-wrap justify-center gap-4">
        {
					filters.map((filter) => (
						<Button
							key={filter}
							onClick={() => setActiveFilter(filter)}
							variant={activeFilter === filter ? "default" : "outline"}
							className={`
								rounded-full px-6 py-2 text-sm font-medium transition-colors w-28 h-12
								${activeFilter === filter 
									? 'bg-primary text-white' 
									: 'bg-background text-muted-foreground hover:bg-muted/10'}
							`}
						>
							{filter}
						</Button>
        ))
				}
      </div>
    </div>
  )
}