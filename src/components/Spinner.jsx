import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-text-top text-green-500 motion-reduce:animate-spin_1.5s_linear_infinite"
        role="status"
      >
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-none">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Spinner