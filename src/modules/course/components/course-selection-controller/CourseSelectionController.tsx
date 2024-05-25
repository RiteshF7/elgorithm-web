'use client';

import { FC, useEffect, useState } from "react";
import { useCourseSelection } from "../../hooks/useCourseSelection";
import { useRouter } from "next/navigation";
import { getFirstLessonId, isValidSelectedLesson } from "../../utils/course-selection.utils";

export const CourseSelectionController: FC<{ routeLessonId: number }> = ({ routeLessonId }) => {
  const router = useRouter();
  const { coursesData, completedLessonSequence, setSelectedLessonId } = useCourseSelection();

  useEffect(() => {
    if (!!coursesData?.length && routeLessonId && completedLessonSequence !== undefined) {
      const isValid = isValidSelectedLesson({ completedLessonSequence, lessonId: routeLessonId, coursesData });
      if (isValid) {
        setSelectedLessonId(routeLessonId);
      } else {
        router.push(getFirstLessonId(coursesData) + '');
      }
    }
  }, [routeLessonId, coursesData, completedLessonSequence]);

  return (
    <>
    </>
  )
}