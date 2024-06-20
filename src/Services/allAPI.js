import commonAPI from './commonAPI'
import SERVER_URL from './server_url'

export const registerAPI = async(reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`,reqBody)
}

export const loginAPI = async(reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/login`,reqBody)
}


export const addProjectAPI = async(reqBody,reqHeader) => {
    //project-add
    return await commonAPI("POST", `${SERVER_URL}/project/add`,reqBody,reqHeader)
}

//home project
export const homeProjectAPI = async() => {
    //project-add
    return await commonAPI("GET", `${SERVER_URL}/get-home-projects`,"")
}

//user project
export const userProjectAPI = async(reqHeader) => {
    //project-add
    return await commonAPI("GET", `${SERVER_URL}/user-projects`,"",reqHeader)
}


//all projects
export const allProjectAPI = async(searchKey,reqHeader) => {
    //project-add
    return await commonAPI("GET", `${SERVER_URL}/all-projects?search=${searchKey}`,"",reqHeader)
}

//edit project
export const editProjectAPI = async(pid,reqBody,reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/project/${pid}/edit`,reqBody,reqHeader)
}

//remove project
export const removeProjectAPI = async(pid,reqHeader) => {
    return await commonAPI("DELETE",`${SERVER_URL}/project/${pid}/remove`,{},reqHeader)
}

//edit user
export const editUserAPI = async(reqBody,reqHeader) => {
    return await commonAPI("PUT",`${SERVER_URL}/user/edit`,reqBody,reqHeader)
}