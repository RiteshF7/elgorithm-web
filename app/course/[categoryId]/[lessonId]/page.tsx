import { CourseSelectionController } from "@/modules/course/components/course-selection-controller/CourseSelectionController";
import { FC } from "react";

const LessonPage: FC<{ params: { lessonId: string } }> = ({ params }) => {
  return (
    <>
      <CourseSelectionController routeLessonId={+params.lessonId} />
    </>
  )
}

export default LessonPage;