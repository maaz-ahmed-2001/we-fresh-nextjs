type FlexColumnProps = {
  children : React.ReactNode
  className ?: string
}

const index = ({ children, className } : FlexColumnProps ) => {
  return (
    <div className={`flex items-center justify-center flex-col ${className} `} >
        {children}
    </div>
  )
}

export default index;