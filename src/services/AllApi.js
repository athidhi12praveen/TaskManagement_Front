import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

// register user
export const registerUser=async(body,header)=>{
    return await commonApi("POST",`${BASE_URL}/register`,body,header);
}

// login user
export const loginUser=async(body,header)=>{
    return await commonApi("POST",`${BASE_URL}/login`,body,header);
}

//  add task
export const addTask=async(body,header)=>{
    return await commonApi("POST",`${BASE_URL}/add`,body,header)
}

// get all task
export const allTasks=async(search)=>{
    return await commonApi("GET",`${BASE_URL}/getall?search=${search}`,"")
}

// delete task
export const deleteTask=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/delete/${id}`,{})
}

// edit task
export const editTask=async(id,body)=>{
    return await commonApi("PUT",`${BASE_URL}/edit/${id}`,body)
}