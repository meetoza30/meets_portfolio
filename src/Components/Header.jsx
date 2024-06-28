import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import meetcircle from './meetcircle.jpg'

export default function Header() {
    return (
        <header className="shadow sticky  top-0">
            {/* //z-50 */}
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="items-center">
                        <img
                            src={meetcircle}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        
                        <a
                            href="https://bit.ly/meetoza-portfolio"
                            target='_blank'
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-1 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Editing Portfolio
                        </a>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block px-3 py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700 rounded-lg px-3 py-1": "text-gray-700"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700 rounded-lg" : "text-gray-700"} border-b border-gray-100 hover:text-blue-700 lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700 rounded-lg" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}