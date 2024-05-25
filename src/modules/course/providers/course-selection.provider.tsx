'use client';
import { FC, PropsWithChildren, createContext, useState } from "react";
import { LessonGroupModel, LessonModel } from "../models/course.model";

interface ICourseSelectionContext {
  coursesData: LessonGroupModel[];
  completedLessonSequence: number;
  setCompletedLessonSequence: (data: number) => void;
  selectedLesson: LessonModel | null;
  setSelectedLessonId: (lessonId: number) => void;
}
export const CourseSelectionContext = createContext<ICourseSelectionContext>({
  coursesData: [],
  completedLessonSequence: 0,
  setCompletedLessonSequence: () => { },
  selectedLesson: null,
  setSelectedLessonId: () => { }
})

interface CourseProviderProps {
  lessonGroupData: LessonGroupModel[]
}

export const CourseSelectionProvider: FC<PropsWithChildren<CourseProviderProps>> = ({ lessonGroupData, children }) => {
  const [completedLessonSequence, setCompletedLessonSequence] = useState(5);
  const [selectedLesson, setSelectedLesson] = useState<LessonModel | null>(null);

  const setSelectedLessonId = (lessonId: number) => {
    const lesson = lessonGroupData.map(({ lessonList }) => lessonList).flat(1).find((lesson) => lesson.id === lessonId);
    setSelectedLesson(lesson || null);
  }
  return (
    <CourseSelectionContext.Provider value={{
      coursesData: lessonGroupData,
      completedLessonSequence,
      setCompletedLessonSequence,
      selectedLesson,
      setSelectedLessonId,
    }}>
      {children}
    </CourseSelectionContext.Provider>
  )
}