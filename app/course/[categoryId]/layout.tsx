import { CourseSidebar } from "@/modules/course/components/course-sidebar/CourseSidebar";
import { LessonGroupModel } from "@/modules/course/models/course.model";
import { CourseSelectionProvider } from "@/modules/course/providers/course-selection.provider";
import { FC, PropsWithChildren } from "react";

const BASE_URL = process.env.API_ENDPOINT;

const getCategoryLessonGroups = async (categoryId: string): Promise<LessonGroupModel[]> => {
  return (await fetch(`${BASE_URL}/api/category-lessons/${categoryId}`)).json();
}

const CourseCategoryLayout: FC<PropsWithChildren<{ params: { categoryId: string } }>> = async ({ children, params }) => {
  const categoryCourses = await getCategoryLessonGroups(params.categoryId);
  return (
    <CourseSelectionProvider lessonGroupData={categoryCourses}>
      <div className="flex flex-1 gap-4">
        <CourseSidebar lessonGroupData={categoryCourses} />
        {children}
      </div>
    </CourseSelectionProvider>
  )
}

export default CourseCategoryLayout;