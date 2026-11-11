import React from 'react'

const Btn = ({children, onClick, variant='primary'}) => {

    const BaseStyle = "text-[12px] lg:text-[15] px-4 py-2 md:px-6 lg:px-8 lg:py-3 font-semibold tracking-wider text-gray-300 cursor-pointer transition duration-300"
    const variants = {
      primary : " border border-blue bg-blue/45 hover:bg-gray-300 hover:text-black hover:border-transparent",
      secondry: " border-1 border-white bg-transparent hover:bg-white hover:text-black text-white"
    }

  return (
    <button
        onClick={onClick}
        className={`${BaseStyle} ${variants[variant]}`}
    >
        {children}

    </button>
  )
}

export default Btn


// 8 3 