import React from 'react'
import { Link } from 'react-router-dom'
import { Chrome, Apple, Warehouse } from 'lucide-react'

export default function Signup() {
    return (
        <div className="min-h-[calc(100-64px)] flex items-center justify-center bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-zinc-100">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-zinc-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-zinc-600">
                        Start your journey with ChatGPT
                    </p>
                </div>
                <form className="mt-8 space-y-4" action="#" method="POST">
                    <div className="rounded-md space-y-4">
                        <div>
                            <label htmlFor="full-name" className="sr-only">Full Name</label>
                            <input
                                id="full-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-zinc-300 placeholder-zinc-500 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-zinc-300 placeholder-zinc-500 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" name="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-zinc-300 placeholder-zinc-500 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md hover:shadow-blue-500/20"
                        >
                            Continue
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-zinc-500 uppercase tracking-wide text-xs">OR</span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        <button className="w-full inline-flex justify-center py-3 px-4 rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all gap-3 items-center">
                            <Chrome size={20} className="text-zinc-600" />
                            Continue with Google
                        </button>
                        <button className="w-full inline-flex justify-center py-3 px-4 rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all gap-3 items-center">
                            <Warehouse size={20} className="text-zinc-600" />
                            Continue with Microsoft Account
                        </button>
                        <button className="w-full inline-flex justify-center py-3 px-4 rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all gap-3 items-center">
                            <Apple size={20} className="text-zinc-600" />
                            Continue with Apple
                        </button>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-zinc-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
