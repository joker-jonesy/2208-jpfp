import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Campus", "Students", "SingleCampus", "SingleStudent"],
  endpoints: (builder) => ({
    //GET ALL CAMPUS
    getCampus: builder.query({
      query: () => "/campus",
      providesTags: ["Campus"],
    }),
    //GET ALL STUDENTS
    getStudent: builder.query({
      query: () => "/student",
      providesTags: ["Students"],
    }),
    //GET SINGLE CAMPUS
    getSingleCampus: builder.query({
      query: (id) => `/campus/${id}`,
      providesTags: ["SingleCampus"],
    }),
    //GET SINGLE STUDENT
    getSingleStudent: builder.query({
      query: (id) => `/student/${id}`,
      providesTags: ["SingleStudent"],
    }),
    //ADD CAMPUS
    addCampus: builder.mutation({
      query: (payload) =>
        // console.log(payload),
        ({
          url: "/campus",
          method: "POST",
          body: payload,
          headhers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }),
      invalidatesTags: ["Campus"],
    }),
    //ADD STUDENT
    addStudent: builder.mutation({
      query: (payload) => ({
        url: "/student",
        method: "POST",
        body: payload,
        headhers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Student"],
    }),
    //UPDATE CAMPUS
    updateCampus: builder.mutation({
      query: (payload) => {
        console.log(payload);
        return {
          url: `/campus/${payload.id}`,
          method: "PUT",
          body: payload.id,
        };
      },
      invalidatesTags: ["SingleCampus"],
    }),
    //UPDATE STUDENT
    updateStudent: builder.mutation({
      query: (payload) => {
        return {
          url: `/student/${payload.id}`,
          method: "PUT",
          body: payload.data,
        };
      },
      invalidatesTags: ["SingleStudent"],
    }),
    //DELETE CAMPUS
    deleteCampus: builder.mutation({
      query: (id) => ({
        url: `/campus/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Campus"],
    }),
    //DELETE STUDENT
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/student/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useGetCampusQuery,
  useGetStudentQuery,
  useGetSingleCampusQuery,
  useGetSingleStudentQuery,
  useAddCampusMutation,
  useAddStudentMutation,
  useUpdateCampusMutation,
  useUpdateStudentMutation,
  useDeleteCampusMutation,
  useDeleteStudentMutation,
} = apiSlice;
