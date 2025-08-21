import React, { ReactNode, useState, createContext, useContext } from "react";

interface ICourseContextType {
  selectedIdCourseNew: number[];
  setSelectedIdCourseNew: (update: (prev: number[]) => number[]) => void;
}

const CourseContext = createContext<ICourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedIdCourseNew, setSelectedIdCourseNew] = useState<number[]>([]);

  return (
    <CourseContext.Provider
      value={{
        selectedIdCourseNew,
        setSelectedIdCourseNew,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within CourseProvider");
  }
  return context;
};
