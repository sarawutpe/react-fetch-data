import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminWrapper(props) {
  // การรับ props แบบ 1
  const { children } = props

  // การรับ props แบบ 2
  // props.children

  const navigate = useNavigate()
  return (
    <div className="flex flex-wrap place-items-center">
      <section className="relative mx-auto">
        {/* navbar */}
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
              <img className="h-9" src="/react.svg" alt="logo" />
            </a>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              {/* Menu 1 */}
              <li onClick={() => navigate('/')}>
                <span className="hover:text-gray-200 cursor-pointer">Home</span>
              </li>
              {/* Menu 2 */}
              <li onClick={() => navigate('/about')}>
                <span className="hover:text-gray-200 cursor-pointer">About</span>
              </li>
              {/* Menu 3 */}
              <li onClick={() => navigate('/contact')}>
                <span className="hover:text-gray-200 cursor-pointer">Contact</span>
              </li>
            </ul>
            {/* Header Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Responsive navbar */}
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
        </nav>
      </section>
      {/* Content */}
      <section className="px-5 xl:px-12 py-6">{children}</section>
    </div>
  )
}
