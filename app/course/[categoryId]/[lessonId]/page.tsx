import { CourseSelectionController } from "@/modules/course/components/course-selection-controller/CourseSelectionController";
import { CourseViewContainer } from "@/modules/course/components/course-view-container/CourseViewContainer";
import { FC } from "react";

const LessonPage: FC<{ params: { lessonId: string } }> = ({ params }) => {
  return (
    <>
      <CourseSelectionController routeLessonId={+params.lessonId} />
      <CourseViewContainer />
    </>
  )
}

export default LessonPage;