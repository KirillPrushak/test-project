import { ICourses } from "../../../shared/types/courses";

export async function GET(): Promise<ICourses[]> {
  try {
    const response = await fetch("http://localhost:6080/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching courses:", error);
    throw error;
  }
}
