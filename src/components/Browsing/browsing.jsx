import React from 'react'

const browsing = () => {
  return (
    <div className='w-full justify-center items-center flex flex-col py-6'>
      
        <div>
        <h2>Browse by category</h2>
        </div>
        <div className=' flex grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-between space-y-10 md:space-y-0  px-8'>
      <div className="relative md:w-1/2 w-full flex justify-center items-center mt-10">
            {/* First Image Card */}
            <div className="grid  items-start  p-[16px] w-[260px] h-[200px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-custom">
            <img 
                src="/520.png" 
                alt="About Image 1" 
                className="h-[256px] self-stretch rounded-[8px] bg-lightgray bg-cover bg-no-repeat"
            /><div className='bg-slate-500 absolute w-[223px]  bottom-10'>
              <div className='flex justify-between px-10'>
                <p>dska</p>
                <p>zee</p>
              </div>
          </div>
            </div>
            
           </div>
           <div className="relative md:w-1/2 w-full flex justify-center items-center mt-10">
            {/* First Image Card */}
            <div className="grid  items-start  p-[16px] w-[280px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-custom">
            <img 
                src="/520.png" 
                alt="About Image 1" 
                className="h-[256px] self-stretch rounded-[8px] bg-lightgray bg-cover bg-no-repeat"
            />
            </div>
           </div>   <div className="relative md:w-1/2 w-full flex justify-center items-center mt-10">
            {/* First Image Card */}
            <div className="grid  items-start  p-[16px] w-[280px] rounded-[16px] bg-[rgba(249,249,249,0.7)] shadow-custom">
            <img 
                src="/520.png" 
                alt="About Image 1" 
                className="h-[256px] self-stretch rounded-[8px] bg-lightgray bg-cover bg-no-repeat"
            />
            </div>
           </div>
            </div>  
     
      
    </div>
  )
}

export default browsing;
