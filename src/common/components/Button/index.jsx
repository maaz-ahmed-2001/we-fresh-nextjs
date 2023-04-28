import React from 'react'

const index = ({ children, className }) => {
  return (
    <button className={`text-sm ${className} w-[100px] h-[35px] lg:w-[140px] rounded-sm bg-btn-bg active:scale-95`} >
      {children}
    </button>
  )
}

export default index