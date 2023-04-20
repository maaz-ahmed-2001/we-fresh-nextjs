import React from 'react'

const ServicesWrapper = ({ src, text }) => {
  return (
    <div className='flex p-3 flex-col gap-3 rounded-md shadow-sm group hover:scale-105 ' >
        <img src={src} alt={text} />
        <p className='text-center group-hover:text-txt-blue ' >{text}</p>
    </div>
  )
}

export default ServicesWrapper
