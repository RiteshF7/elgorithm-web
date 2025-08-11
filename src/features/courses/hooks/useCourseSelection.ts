import { useContext } from "react";
import { CourseSelectionContext } from "../providers/course-selection.provider";

export const useCourseSelection = () => {
  return useContext(CourseSelectionContext);
};
