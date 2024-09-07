"use client";
import React, { ReactNode, useEffect, useState } from 'react'
import { compilerContext } from './compilerContext';
import { HELLO_KAMLESH_CODE } from '@/constant';
const CompilerContextProvider = ({children}:{children:ReactNode}) => {
    const  [language,setLanguage] = useState<string>("javascript");
    const [defaultCode,setDefaultCode]= useState<string>(`console.log("Hello Kamlesh");`)

    useEffect(()=>{
      const defaultCodeArr= Object.entries(HELLO_KAMLESH_CODE);
      for(let i=0;i<defaultCodeArr.length;i++){
        if(language===defaultCodeArr[i][0]){
          setDefaultCode(defaultCodeArr[i][1]);
        }
      }
      console.log(defaultCode,"defaultCode");
    },[language])
  return (
    <compilerContext.Provider value={{language,setLanguage,defaultCode}}>
        {children}
    </compilerContext.Provider>
  )
}

export default CompilerContextProvider