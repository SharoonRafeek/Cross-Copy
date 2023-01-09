import React from 'react'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className='p-8 flex flex-row text-purple-600 justify-between'>
          <span className='text-xl font-bold lg:text-3xl md:text-2xl'>Cross Copy</span>
          <div className='space-x-2 lg:space-x-9 md:space-x-5'>
            <span><a className='header-link' href="/">Home</a></span>
            <span><a className='header-link' href="/about">About</a></span>
            <span><a className='header-link' href="/contact">Contact</a></span>
            <span><a className='header-link' href="https://github.com/SharoonRafeek/Cross-Copy">Contribute</a></span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar