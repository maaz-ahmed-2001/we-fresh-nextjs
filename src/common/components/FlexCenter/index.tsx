import React from 'react'

type FlexCenterProps = {
  children : React.ReactNode
  className ?: string
}

const index = ({ children, className } : FlexCenterProps ) => {
  return (
    <div className={`flex items-center flex-row justify-center ${className} `} >
        {children}
    </div>
  )
}

export default index;