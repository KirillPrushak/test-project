import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICourses } from "../../types/courses";

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:6080/" }),
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
