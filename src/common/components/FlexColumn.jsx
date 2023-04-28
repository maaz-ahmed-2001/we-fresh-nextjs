import React from 'react'

const FlexColumn = ({ children, className, }) => {
  return (
    <div className={`flex items-center justify-center flex-col ${className} `} >
        {children}
    </div>
  )
}

export default FlexColumn;
