import {Post} from "../hooks/usePost";
import axios from "axios";

export const URL_PATH = 'https://waco-api.herokuapp.com/api/'
export const requestCreatePost = async (body: Post): Promise<any> => {
    try {
        const {data: {data: postCreated}} = await axios.post(`${URL_PATH}posts`, body)
        return postCreated as Post
    } catch (e) {
        console.log(e)
        return e
    }
}

export const requestDeletePost = async (id: string): Promise<any> => {
    try {
        const {data: {data: postDeleted}} = await axios.delete(`${URL_PATH}posts/${id}`)
        return postDeleted as Post
    } catch (e) {
        console.log(e)
        return e
    }
}

export const requestGetPost = async (): Promise<any> =>{
    try {
        const {data: {data: data2}} = await axios.get(`${URL_PATH}posts`)
        return data2
    } catch (e) {
        console.log(e)
        return e
    }
}

