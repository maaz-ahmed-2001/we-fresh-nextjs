import React from 'react'

const index = ({ children, width }) => {
  return (
    <button className={`w-[${width.toString()}]  text-sm px-4 rounded-sm bg-btn-bg active:scale-95`} >
      {children}
    </button>
  )
}

export default index