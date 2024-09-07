"use client";
import React, { useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { useContext } from 'react';
import { compilerContext } from '@/context/compilerContext';
const EditorComponent = () => {
    const editorRef = useRef();
    const {language,defaultCode} = useContext(compilerContext);
    const [value ,setValue] = useState<any>(defaultCode);
    const [lan,setLan] = useState<string>(language);
    const onMount = (editor:any)=>{
         editorRef.current=editor;
         editor.focus();
    }
    useEffect(()=>{
      setLan(language);
    },[language])

    useEffect(()=>{
      setValue(defaultCode);
    },[defaultCode])

  return (
    <div>
        <Editor 
         height="80vh"
         language={lan}
         theme='vs-dark'
         value={value}
         onChange={(newValue)=>setValue(newValue)}
         onMount={onMount}
         line={10}
         width={"100%"}
        
        />
    </div>
  )
}

export default EditorComponent