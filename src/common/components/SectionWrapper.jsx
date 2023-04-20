import React from 'react'

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={` p-20 block m-auto max-w-[1440px] w-full ${className}`} >
        {children}
    </section>
  )
}

export default SectionWrapper