import React, {useEffect, useReducer} from "react";
import {requestCreatePost, requestDeletePost, requestGetPost} from "../servicesApi/Post";
import {collection, addDoc, onSnapshot} from "firebase/firestore";
import {db} from "../services/firebase";
import {useAuth} from "./useAuth";

export enum actionTypePost {
    'TO_FAVORITE' = 'TO_FAVORITE',
    'CREATE' = 'CREATE',
    'DELETE' = 'CREATE',
    'GET_POST_API' = 'GET_POST_API',
    'GET_POST_FIREBASE' = 'GET_POST_FIREBASE'
}

type ActionPost = {
    type: actionTypePost,
    payload?: any
}

const createPost = (payload: any): ActionPost => ({
    type: actionTypePost.CREATE,
    payload: payload
})

const toFavorite = (payload: any): ActionPost => ({
    type: actionTypePost.TO_FAVORITE,
    payload: payload
})

const deletePost = (payload: any): ActionPost => ({
    type: actionTypePost.DELETE,
    payload: payload
})

const getPosts = (payload: any): ActionPost => ({
    type: actionTypePost.GET_POST_API,
    payload: payload
})

const getPostsFirebase = (payload: any): ActionPost => ({
    type: actionTypePost.GET_POST_FIREBASE,
    payload: payload
})

const initialPost: OptionPost = {
    favorites: [],
    originals: []
}

export interface OptionPost {
    favorites: Post[],
    originals: Post[]
}

export interface Post {
    id?: number;
    title?: string
    body?: string;
    link?: string;
    user?: string;
    user_uuid?: string;
}

function usePost() {
    const [posts, dispatch] = useReducer(postReducer, initialPost);
    const {user} = useAuth()

    useEffect(() => {
        getPostApi();
        getPostFromFirebase();
    }, []);


    const onCreatePost = (post: Post) => {
        requestCreatePost(post).then(
            (newPost) => {
                dispatch(createPost(newPost))
            }
        ).then(
            error => console.log(error)
        )
    }

    const getPostApi = async () => {
        requestGetPost().then(
            (post) => {
                dispatch(getPosts(post))
            }
        ).then(
            error => console.log(error)
        )
    }

    const getPostFromFirebase = async () => {

        onSnapshot(collection(db, "favorites",), ({docs}) => {
            const newPosts: Array<any> = [];
            docs.forEach(doc => {
                newPosts.push(doc.data())
            })
            dispatch(getPostsFirebase(newPosts))
        });
    }

    const onDeletePost = (id: string) => {
        requestDeletePost(id).then(
            (post) => {
                dispatch(deletePost(post))
            }
        ).then(
            error => console.log(error)
        )
    }

    const onFavoritePost = async (favoritePost: Post) => {
        try {
            await addDoc(collection(db, 'favorites'), {
                ...favoritePost,
                userId: user.uid
            })
        } catch (e) {
            console.log(e)
        }

    }
    return {onCreatePost, onDeletePost, onFavoritePost, posts}
}


// @ts-ignore
const postReducer = (state: OptionPost, action: ActionPost): OptionPost => {
    const {payload, type} = action
    switch (type) {
        case actionTypePost.TO_FAVORITE:
            return {
                ...state,
                ...payload
            }
        case actionTypePost.CREATE:
            return {
                ...state,
                originals: [
                    ...state.originals,
                    payload
                ]
            }

        case actionTypePost.DELETE:
            const index = state.originals.findIndex(post => post.id == payload.id);
            state.originals.splice(index, 0)
            return {
                ...state
            }

        case actionTypePost.GET_POST_API:
            return {
                ...state,
                originals: payload
            }

        case actionTypePost.GET_POST_FIREBASE:
            return {
                ...state,
                favorites: payload
            }

    }
}



export {usePost}
