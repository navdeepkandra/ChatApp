import React from 'react'
import Search from './Search'
import Users from './Users'


const Left = () => {
  return (
    <div className='w-[30%] text-white bg-black'>
      <h1 className='text-3xl font-bold px-11 py-2'>Chats</h1>
      <Search />
      <hr />
      <Users />
    </div>
  )
}

export default Left
