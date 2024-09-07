"use client"
import React, { useEffect, useState } from 'react'
import { LANGUAGES } from '@/constant';
import { useContext } from 'react';
import { compilerContext } from '@/context/compilerContext';
const LanguageSelector = () => {
    const {language,setLanguage} = useContext(compilerContext);
    const [isOpenLanguageContainer,setIsOpenLanguageContainer] = useState<boolean>(false);
    const [languageAndVersion,setLanguageAndVersion] = useState<Array<Array<string>>>();
    useEffect(()=>{
        setLanguageAndVersion(Object.entries(LANGUAGES));
    },[])
    const langaugeHandler = (lan:string)=>{
        setLanguage(lan);
        setIsOpenLanguageContainer(false);
    }
  return (
    <div className='flex flex-col gap-2  relative'>
        <div className='flex gap-2 items-center'>
        <p className='text-lightText font-semibold'>Language:</p>
        <button className='w-[130px] h-[30px] rounded  bg-hara text-[#eee]  font-semibold capitalize cursor-pointer'  onClick={()=>setIsOpenLanguageContainer((prev)=>!prev)}>{language}</button>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
            <label className=' font-medium text-white'>Generate the <span className='text-hara'>code</span> Using <span className='text-hara'>Ai 😈</span> </label>
            <div className='flex w- gap-2'>
            <input type="text" placeholder='eg. Reverse of linkedlist' className='bg-darkSlate text-white  border border-hara outline-none pl-2 h-[30px] rounded-sm w-full text-[13px]' />
            <button className='bg-hara text-white w-[150px] h-[30px] rounded-sm cursor-pointer'>💡Generate</button>
            </div>
           
        </div>
        
        {
            isOpenLanguageContainer &&  <div className='flex flex-col gap-2 w-[300px] bg-[#131313] rounded-sm  absolute  top-20 z-30 h-[400px] overflow-y-auto'>

                {
                  languageAndVersion && languageAndVersion.map((lan)=>(
                        <div className={`pl-3 flex gap-2  text-lightText w-full py-2 hover:bg-[#313131] cursor-pointer p-2 font-medium ${lan[0]===language && "bg-[#313131]"}`}
                        key={lan[0]}
                        onClick={()=>langaugeHandler(lan[0])}><p>{lan[0]}</p> <p>{lan[1]}</p></div>
                    ))
                }
         
        </div> 
        }
        </div>
       
      

  )
}

export default LanguageSelector