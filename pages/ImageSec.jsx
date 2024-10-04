import React from 'react'

export default function ImageSec() {
  return (
    <div className='min-h-screen'>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/ImageSec/bg.jpg')] bg-cover bg-center brightness"></div>

        <div className="images w-full h-full flex justify-center items-center relative">
          <img src="/ImageSec/pic.png" className='w-full px-2' alt="Image" />
        </div>
      </div>
    </div>

  )
}