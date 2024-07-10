//all the function that the server need for user related operation
import { myAxios } from "./helper";


//export is used to use this function on signUp component
 export const signUp=(user)=>{
    return myAxios
    .post("/api/auth/register",user)
    .then((response)=> response.json());
}