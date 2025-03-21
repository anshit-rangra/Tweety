import axios from 'axios';

export const client = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {"Content-Type":"application/json"},
    withCredentials: true
})

export const registration = async (form) => {
    const response = await client.post("auth/registration", form)
    return response.data
}

export const login = async (form) => {
    const response = await client.post("auth/login", form)
    return response.data
}

export const user = async () => {
    const response = await client.get("auth/")
    return response.data
}

export const uploadBlog = async (body) => {
    const response = await client.post("blogs/",body)
    return response.data
}

export const getMyblogs = async () => {
    const response = await client.get("myblogs/")
    return response.data
}

export const deleteBlog = async (_id) => {
    const response = await client.delete(`blog/delete/${_id}`)
    return response.data
}

export const getBlogs = async () => {
    const response = await client.get("blogs/")
    return response.data
}

export const likeBlog = async (_id) => {
    const response = await client.patch(`blog/like/${_id}`)
    return response.data
}

export const dislikeBlog = async (_id) => {
    const response = await client.patch(`blog/dislike/${_id}`)
    return response.data
}