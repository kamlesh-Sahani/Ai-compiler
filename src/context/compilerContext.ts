import { createContext} from "react";

interface CompilerContextType{
    language:string,
    setLanguage:(lan:string)=>void,
    defaultCode:string;
}
export const  compilerContext = createContext<CompilerContextType>({
    language:"javascript",
    setLanguage:()=>{},
    defaultCode:`console.log("Hello Kamlesh");`
});
