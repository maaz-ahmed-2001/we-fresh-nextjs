import React from 'react'

const FlexCenter = ({ children, className }) => {
  return (
    <div className={`flex items-center flex-row justify-center ${className} `} >
        {children}
    </div>
  )
}

export default FlexCenter
