import axios from "axios";
import { LANGUAGES } from "./constant";
const API = axios.create({
    baseURL:"https://piston.readthedocs.io"
});


export const execute= async(language:string,sourceCode:string)=>{
    const response = await API.post("/api/v2/execute",{
        "language": language,
        "version": LANGUAGES[language],
        "files": [
            {
              "name": "my_cool_code.js",
              "content": sourceCode
            }
          ],
    })

    return response.data;
}