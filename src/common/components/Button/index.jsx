import React from 'react'

const index = ({ children, className }) => {
  return (
    <button className={`text-sm ${className} px-4 rounded-sm bg-btn-bg active:scale-95`} >
      {children}
    </button>
  )
}

export default index