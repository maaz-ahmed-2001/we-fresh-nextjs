import React from 'react'

const Container = ({ children, explicitClassName }) => {
  return (
    <div className={`max-w-7xl block m-auto ${explicitClassName}`} >
        {children}
    </div>
  )
}

export default Container