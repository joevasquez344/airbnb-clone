import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* Right */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='cursor-pointer hidden md:inline'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
    </header>
  )
}

export default Header
