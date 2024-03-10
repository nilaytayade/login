import React from 'react'

function Input(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} className='bg-transparent border-[1px] text-[#FFFFFF] w-[100%] py-[15px] px-[15px] rounded-[20px]'></input>
    </div>
  )
}

export default Input
