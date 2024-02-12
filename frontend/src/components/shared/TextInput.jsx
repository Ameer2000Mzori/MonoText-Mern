import React from 'react'

// eslint-disable-next-line object-curly-newline
const TextInput = ({ title, input, updateInput, pattern, errMsg, type }) => {
  return (
    <div className="my-3">
      <label htmlFor={title} className="text-md ">
        {title}
      </label>
      <input
        id={title}
        className="w-full border-[1px] text-primary border-primary p-1 rounded"
        value={input}
        onChange={(e) => updateInput(e.target.value)}
        pattern={pattern}
        type={type ?? 'text'}
        required={!!errMsg}
      />
      {errMsg && !input.match(pattern) && (
        <small className="block text-red-900">{errMsg}</small>
      )}
    </div>
  )
}

export default TextInput
