"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from "js-cookie";
import toast , { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const registerFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters."),
  admin: z.boolean().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"]
});

export default function LoginForm() {
  const router = useRouter()

  const { 
    register,
    handleSubmit, 
    control,
    setError,
    formState: {
        errors , isSubmitting
      } } = useForm({
        resolver: zodResolver(registerFormSchema)
      });

      const onSubmit = async (data) => {
        try {
          const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: data.name,
              email: data.email,
              password: data.password,
              isAdmin: data.admin,
            }),
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.message || "Something went wrong. Please try again.");
          }

          console.log("Registration Successful:", result);

          // * Save token to a cookie (valid for 7 days)
          Cookies.set("token", result.data.token, { expires: 7, secure: true });

          toast.success("Registration successful!");

          setTimeout(() => {
            router.push("/login");
          }, 2500);

        } catch (error) {
          setError("root", { message: error.message });
          toast.error("Registration failed. Please try again.");
        }
      };

  return (
    <div className='bg-[#F9F9F7] min-h-screen flex flex-col justify-around items-center p-6'>
      <Toaster position="bottom-right" reverseOrder={false} />
      <img src="Register.svg" alt="" className='p-5'/>
      <div className="w-full max-w-2xl mx-5 p-10 m-10 bg-white rounded-xl shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 flex flex-col gap-3">

          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Name
            </label>
            <Input
              type="text"
              id="Name"
              {...register("name")}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-primary"
            />
            <div className="h-1">{
              errors.name 
              && 
              <span className="text-red-500 text-xs ml-3">
                {errors.name.message}
              </span>
            }</div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="Email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-primary"
            />
            <div className="h-1">{
              errors.email 
              && 
              <span className="text-red-500 text-xs ml-3">
                {errors.email.message}
              </span>
            }</div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              id="Password"
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-primary"
            />
            <div className="h-1">{
              errors.password 
              && 
              <span className="text-red-500 text-xs ml-3">
                {errors.password.message}
              </span>
            }</div>
          </div>

          {/* Confirm */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Confirm Password
            </label>
            <Input
              type="password"
              id="Password"
              {...register("confirmPassword")}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:border-primary"
            />
            <div className="h-1">{
              errors.confirmPassword 
              && 
              <span className="text-red-500 text-xs ml-3">
                {errors.confirmPassword.message}
              </span>
            }</div>
          </div>

          {/* Admin */}
          <div className="pt-3">
            <div className="flex items-center space-x-2 ">
              <Controller
                name="admin"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    id="Admin"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className = "text-white"
                  />
                )}/>
              <label
                htmlFor = "Admin"
                className = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Register as an Admin.
              </label>
            </div>
          </div>    

          {/* Root Error */}
          <div className="h-1 flex items-center justify-center">{
              errors.root 
              && 
              <span className="text-red-500 text-sm ml-3">
                {errors.root.message}
              </span>
            }</div>

          {/* Register Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-3 font-semibold rounded-full text-white"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>

          {/* Login Link */}
          <div className="flex items-center justify-center space-x-2 text-sm">
            <p className="text-gray-500">Already have an account ?</p>
            <Link href='/login'
            className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  )
}