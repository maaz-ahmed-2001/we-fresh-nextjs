import React from 'react'

type FlexCenterProps = {
  children : React.ReactNode
  className ?: string
}

const FlexCenter = ({ children, className } : FlexCenterProps ) => {
  return (
    <div className={`flex items-center flex-row justify-center ${className} `} >
        {children}
    </div>
  )
}

export default FlexCenter
