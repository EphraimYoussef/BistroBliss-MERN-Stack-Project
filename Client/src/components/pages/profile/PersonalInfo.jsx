"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Playfair_Display } from 'next/font/google'

const playFairDisplay_Font = Playfair_Display({ subsets: ['latin'] })

const PersonalInfo = () => {
	const [username, setUsername] = useState("JohnDoe")
	const [email, setEmail] = useState("john.doe@example.com")
	const [password, setPassword] = useState("")

	const handleSave = () => {
		// Implement save functionality here
		console.log("Saving profile information:", { username, email, password })
	}

	return(
		<Card>
				<CardHeader>
					<CardTitle className={playFairDisplay_Font.className } >
					<span className="font-semibold tracking-wide" >Personal Information</span>
					</CardTitle>
					<CardDescription>Update your profile details here.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="username">Username</Label>
						<Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter new password"
						/>
					</div>
					<Button onClick={handleSave} className="w-full text-white">
						Save Changes
					</Button>
				</CardContent>
		</Card>
	)
}

export default PersonalInfo