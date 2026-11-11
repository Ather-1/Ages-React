import React from 'react'

const HeroTags = ({tag}) => {
  return (
    <div>
      <span className='px-4 py-1.5 backdrop-blur-xl border rounded-3xl border-gray-600 text-[9px] md:text-[11px] text-light tracking-wider font-light' >
        {tag}</span>
    </div>
  )
}

export default HeroTags
