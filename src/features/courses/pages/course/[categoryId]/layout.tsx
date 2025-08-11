import { CourseSidebar } from "../../../components/course-sidebar/CourseSidebar";
import { LessonGroupModel } from "../../../models/course.model";
import { CourseSelectionProvider } from "../../../providers/course-selection.provider";
import { FC, PropsWithChildren } from "react";
import {CategoryModel} from "../../../models/category.model";
import {PlayGroundContainer} from "@/features/playground/components/playground-container/PlaygroundContainer";

// const BASE_URL = process.env.API_ENDPOINT;
const BASE_URL = "http://localhost:3000"

const getCategoryLessonGroups = async (categoryId: string): Promise<LessonGroupModel[]> => {
    const response = await fetch(`${BASE_URL}/api/category-lessons/${categoryId}`);
    return response.json();
}

const CourseCategoryLayout: FC<PropsWithChildren<{ params: { categoryId: string } }>> = async ({ children, params }) => {
  const categoryCourses = await getCategoryLessonGroups(params.categoryId);
  return (
    <CourseSelectionProvider lessonGroupData={categoryCourses}>
      <div className="flex flex-row gap-4">
        <CourseSidebar lessonGroupData={categoryCourses} />
        {children}
      </div>
    </CourseSelectionProvider>
  )
}

export default CourseCategoryLayout;
