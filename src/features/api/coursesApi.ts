import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICourses } from "../../types/courses";

console.log('1111', process.env.REACT_APP_API_URL)

const API_URL =
  process.env.REACT_APP_API_URL === "production"
    ? "https://test-server-mysql-production.up.railway.app"
    : "http://localhost:8080/";

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({
    getCourses: builder.query<ICourses[], void>({
      query: () => "/courses",
      transformResponse: (response: { courses: ICourses[] }) =>
        response.courses,
    }),
    addCourses: builder.mutation<ICourses, Partial<ICourses>>({
      query: (newCourse) => ({
        url: "/courses",
        method: "POST",
        body: newCourse,
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useAddCoursesMutation } = coursesApi;
