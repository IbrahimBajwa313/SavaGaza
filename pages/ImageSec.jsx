import React from 'react'

export default function ImageSec() {
  return (
    <div className=''>
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/ImageSec/bg.jpg')] bg-cover bg-center filter brightness"></div>

        <div className="images w-full h-full flex justify-center items-center relative">
          <img src="/ImageSec/pic.png" className='w-full px-5 py-2' alt="Image" />
        </div>
      </div>
    </div>

  )
}