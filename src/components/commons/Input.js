import React from 'react'

const Input = ({multiline, name, value, onChange}) => {
  return (
    <div>
      <div className="post-form__label">{name}</div>
      {!multiline 
      ? ( <input type="text" name={name} value={value} onChange={onChange}/> )
      : ( <textarea name={name} value={value} onChange={onChange}/>)}
    </div>
  )
}

export default Input