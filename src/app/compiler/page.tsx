import React from 'react'
import EditorComponent from '@/components/Editor'
import LanguageSelector from '@/components/LanguageSelector'
const Compiler = () => {
  return (
    <div className='grid grid-cols-2 w-full p-10 2xl:w-[90%] m-auto'>
      <div className='flex flex-col gap-5'>
      <LanguageSelector />
      <EditorComponent />
      </div>
     <div className='flex flex-col gap-5  py-2 px-3 '>
     <button className='bg-hara text-white w-[150px] h-[30px] rounded-sm cursor-pointer'>Run Code</button>
     <div className='w-full h-full border border-[#3a3a3a] p-2'>
      <p>Click "Run code" to see the output here</p>
     </div>
     </div>
    </div>
  )
}

export default Compiler