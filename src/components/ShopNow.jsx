import React from 'react'

const ShopNow = () => {
  return (
    <div className="w-full h-screen ">
      <div className="py-10 max-w-[1240px] mx-auto ">
        <div className='text-center mx-auto'>
            <h1 className='md:text-5xl text-4xl font-bold mb-5'>Shop Now</h1>
            <p className='md:text-xl text-lg'>There are various types of fashion shops that cater to different styles,</p>
            <p className='md:text-xl text-lg'>budget, and  target markets.</p>
        </div>
        <div className='card-container mt-4'>
            <div className='card flex flex-col items-center justify-center  relative'>
              <div className='w-[250px] h-[400px] bg-[#FE5F38] rounded-md rotate-[-15deg]'></div>
              <img className='rounded-md absolute w-[250px]  h-[400px] max-width: 100%' src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVwYXJ0bWVudCUyMHN0b3JlJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <h1 className='font-bold'>Department Store</h1>
              <button className='p-2 my-2 mr-2 bg-[#FE5F38] text-white rounded-md min-w-[80px] cursor-pointer'>Shop now</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default ShopNow