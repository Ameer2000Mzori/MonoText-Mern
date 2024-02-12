import React from 'react'

export default function Card({ title, className, children }) {
  return (
    <div className={`bg-white rounded-md shadow-md p-4 ${className}`}>
      {title && <h2 className="text-xl font-bold my-4">{title}</h2>}
      <hr />
      <div className="mt-4">{children}</div>
    </div>
  )
}
