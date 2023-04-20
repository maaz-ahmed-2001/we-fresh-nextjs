import React from 'react'

const FlexCenter = ({ children, className }) => {
  return (
    <div className={`flex items-center justify-center ${className} `} >
        {children}
    </div>
  )
}

export default FlexCenter
