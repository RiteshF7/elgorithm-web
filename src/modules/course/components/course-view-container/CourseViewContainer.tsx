'use client';
import { FC, PropsWithChildren } from "react";
import { useCourseSelection } from "../../hooks/useCourseSelection";
import { Button } from "@/modules/common/components/button/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { getPreviousNextLessonId } from "../../utils/course-selection.utils";

export const CourseViewContainer: FC<PropsWithChildren> = ({ children }) => {
  const { selectedLesson, coursesData, markAsComplete } = useCourseSelection();
  const { previousLessonId, nextLessonId } = getPreviousNextLessonId(coursesData, selectedLesson?.id);
  return (
    <main className="flex flex-col gap-4 flex-1 p-2">
      {/*<h1 className="text-xl">{selectedLesson?.title}</h1>*/}
      {/*<p className="text-md text-content-light">*/}
      {/*  {selectedLesson?.description}*/}
      {/*</p>*/}
      <div className="flex-1">
        {children}
      </div>
      <div className="flex justify-between gap-2">
        {
          !!previousLessonId ? <Link href={previousLessonId + ''} >
            <Button uiType="secondary">
              <ChevronLeftIcon className="w-6 h-6" />
              Previous
            </Button>
          </Link>
            : <span />
        }
        {!!nextLessonId && <Link href={nextLessonId + ''}>
          <Button uiType="primary" onClick={markAsComplete}>
            Next
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </Button>
        </Link>}
      </div>
    </main>
  )
}
