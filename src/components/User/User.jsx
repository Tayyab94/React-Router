/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}= useParams();
    return (
    <div className='bg-gray-700 text-white text-3xl p-4 text-center text' >
      USer: {userid}
    </div>
  )
}

export default User
