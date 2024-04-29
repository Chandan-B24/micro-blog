import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserApi } from "../../models/user.model";



export const userApi = createApi({
    reducerPath : 'User',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://server.theatom.blog/api/',
    }),
    tagTypes : ["User"],
    endpoints : (builder) => ({
        createUser : builder.mutation<UserApi,User>({
            query : (user) => ({
                url : '/create',
                method : 'POST',
                body : user
            }),
            invalidatesTags : ["User"]
        }),
    }),
});

export const {useCreateUserMutation} = userApi;





