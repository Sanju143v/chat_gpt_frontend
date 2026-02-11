import React from 'react'
import { Link } from 'react-router-dom'
import { UserPlus, LogIn, Home, Info, Mail } from 'lucide-react'

function Header() {
    return (
        <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Title */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                            ChatGPT
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex space-x-6">
                        <Link to="/" className="flex items-center text-zinc-300 hover:text-white transition-colors gap-2">
                            <Home size={18} />
                            <span className="hidden sm:inline">Home</span>
                        </Link>
                        <Link to="/about" className="flex items-center text-zinc-300 hover:text-white transition-colors gap-2">
                            <Info size={18} />
                            <span className="hidden sm:inline">About</span>
                        </Link>
                        <Link to="/contact" className="flex items-center text-zinc-300 hover:text-white transition-colors gap-2">
                            <Mail size={18} />
                            <span className="hidden sm:inline">Contact</span>
                        </Link>
                    </nav>

                    {/* Auth Links */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="flex items-center text-zinc-300 hover:text-white transition-colors gap-2 px-3 py-1.5 rounded-lg hover:bg-zinc-800"
                        >
                            <LogIn size={20} />
                            <span className="hidden md:inline font-medium">Login</span>
                        </Link>
                        <Link
                            to="/signup"
                            className="flex items-center bg-blue-600 text-white gap-2 px-4 py-1.5 rounded-lg hover:bg-blue-500 transition-all font-medium shadow-md hover:shadow-blue-500/20"
                        >
                            <UserPlus size={20} />
                            <span className="hidden md:inline">Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
