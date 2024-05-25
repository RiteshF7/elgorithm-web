import { LessonGroupModel } from "../models/course.model";

export const isValidSelectedLesson = ({
  lessonId,
  completedLessonSequence,
  coursesData,
}: {
  lessonId: number;
  completedLessonSequence: number;
  coursesData: LessonGroupModel[];
}) => {
  return coursesData.some(({ lessonList }) =>
    lessonList.some(
      ({ id, sequence }) =>
        id === lessonId && sequence <= completedLessonSequence + 1
    )
  );
};

export const getFirstLessonId = (coursesData: LessonGroupModel[]) => {
  return coursesData.map(({ lessonList }) => lessonList).flat(1)[0].id;
};
