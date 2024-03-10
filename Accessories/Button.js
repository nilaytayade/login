import React from 'react'

function Button(props) {
  return (
    <div>
      <button className="bg-[#00B2FF] relative rounded-[20px]  py-[15px] px-[75px]">
        {props.title}
      </button>
    </div>
  );
}

export default Button
