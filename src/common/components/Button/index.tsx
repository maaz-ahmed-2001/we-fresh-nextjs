import React from 'react'

type ButtonProps = {
  children : React.ReactNode
  className : string  
}

const index = ({ children  , className } : ButtonProps) => {
  return (
    <button className={`text-sm ${className} w-[100px] h-[35px] lg:w-[140px] rounded-sm bg-btn-bg active:scale-95`} >
      {children}
    </button>
  )
}

export default index