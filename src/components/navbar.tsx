import React from "react"

const Navbar = () => {
    return (

        <nav className="bg-gray-800 mb-20">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <a href="https://flowbite.com/" className="flex items-left">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Movies</span>
                    </a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;