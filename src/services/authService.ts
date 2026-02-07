import { AUTH_ENDPOINTS } from "../config/api";

export async function registerUser(data:{
    fullName: string,
    email:string,
    password:string,
}) {
    const response = await fetch (AUTH_ENDPOINTS.REGISTER,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    const result = await response.json();
    if(!response.ok || !result.isSuccess){
        throw new Error(result.error?.message || "Registration failed")
    }
    return result.value; //JWT
    
}