import React from 'react'

export const MenuItem = ({icon: Icon ,name ,isOpen,isLogout}) => {
  return (
    <div>
        <div className={`m-2 flex cursor-pointer items-center space-x-4 rounded-md py-3 px-4 text-gray-400 duration-500 hover:bg-teal-700 hover:text-white  ${isLogout ? "mt-auto hidden" : "" } `}>
            <Icon className="text-xl"/>
            {isOpen &&  <span className='text-[14px] overflow-hidden'>{name}</span>}
        </div>
    </div>
  )
}
