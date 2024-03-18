import React from 'react'

// eslint-disable-next-line object-curly-newline
const TextInput = ({
  title,
  name,
  input,
  updateInput,
  errMsg,
  type,
  onBlur,
}) => {
  return (
    <div className="my-3">
      <label htmlFor={title} className="text-md ">
        {title}
      </label>
      <input
        id={name}
        name={name}
        className="w-full border-[1px] text-primary border-primary p-1 rounded"
        value={input}
        onChange={updateInput}
        type={type ?? 'text'}
        onBlur={onBlur}
      />
      <small className="text-red-300">{errMsg}</small>
    </div>
  )
}

export default TextInput
