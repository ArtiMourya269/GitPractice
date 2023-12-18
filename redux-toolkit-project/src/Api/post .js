import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi=createApi({
    reducerPath:'postApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/',
    }),
    endpoints:(builder)=>({ 
    //Fetch All Data from the API
    getAllPost:builder.query({
        query:()=>({
            url:`posts`,
            method:'GET'
        }),
    }),
  
    //Fetch perticular id data by using Id From The API 
    getPostById:builder.query({
        query:(id)=>({
            url:`posts/${id}`,
            method:'GET'
        }),
    }),

    //Fetch Data by Limit by passing limit
    getPostByLimit:builder.query({
        query:(num)=>({
            url:`posts?_limit=${num}`,
            method:'GET'
        })
    }),

    //Delete Data 
    deletePostById:builder.mutation({
        query:(id)=>({
            url:`posts/${id}`,
            method:'DELETE'
        }),
    }),

    //Create Data
    createPost:builder.mutation({
        query:(newPost)=>({
            url:`posts`,
            method:'POST',
            body:newPost,
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            }
        }),
    }),
}),
})

export const {useGetAllPostQuery}=postApi;
export const {useGetPostByIdQuery}=postApi;
export const {useGetPostByLimitQuery}=postApi;
export const {useDeletePostByIdMutation}=postApi;
export const {useCreatePostMutation}=postApi;


