import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.soowgood.com' }),

    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url:`/api/AppointmentSettings/AppointmentListForBooking`,
                method:'post',
                body: {
                    "ServiceProviderId":"eb9ce487-8c86-49ef-aff9-17dd2f49d459",
                    "AppointmentType":"Clinic"
                },
            })
        }),
    }),
})

export const { useGetAllPostQuery } = postApi