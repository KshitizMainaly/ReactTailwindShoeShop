import React from 'react'

const Main = (props) => {
    const {imgSrc} =props
  return (
   
<div className="container flex justify-center sm:flex-row lg:flex-row flex-col px-12 my-12">

<div className="writtenContent  max-w-[750px]">
<h1 className='uppercase text-7xl font-bold  font-serif'>Your feet deserve the best</h1>

<p className='my-6'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

<div className="btn flex">
<button className='bg-red-700  text-white px-12 py-4 text-1xl sm:px-4 sm:py-1 lg:px-4  lg:py-1 '>Shop Now</button>
<button className='mx-8 border border-green-900 px-12 py-4 text-1xl sm:px-4 sm:py-1 lg:px-4  lg:py-1 '>Category </button>
</div>

</div >

<div className="imgContent sm:my-0 md:my-0 my-7">

<img src={imgSrc} alt="" />



</div>




</div>


  )
}

export default Main