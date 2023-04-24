import React from 'react'

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={` py-20 lg:px-20 px-0 min-w-full block m-auto  w-full max-w-[1440px] ${className}`} >
        {children}
    </section>
  )
}

export default SectionWrapper