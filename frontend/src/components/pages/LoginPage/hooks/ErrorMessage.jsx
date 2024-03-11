import React from 'react'

const ErrorMessage = ({ children }) => {
  return (
    <p className="red text-red-600 m-0 p-0 h-5px text-[11px] w-[90%] flex flex-col text-start absolute bottom-[-15px] left-5px">
      {children}
    </p>
  )
}

export default ErrorMessage
