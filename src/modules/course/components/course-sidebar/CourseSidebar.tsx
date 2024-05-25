'use client';
import { CheckCircleIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { FC, Fragment } from "react";
import { useCourseSelection } from "../../hooks/useCourseSelection";
import { LessonGroupModel } from "../../models/course.model";

interface CourseSidebarProps {
  lessonGroupData: LessonGroupModel[];
}
export const CourseSidebar: FC<CourseSidebarProps> = ({ lessonGroupData }) => {
  const { selectedLesson, completedLessonSequence } = useCourseSelection();
  return (
    <nav className={clsx('flex flex-col gap-4 sm:w-72 p-6 border-r')}>
      {
        lessonGroupData.map((lessonGroup) => (
          <Fragment key={lessonGroup.id}>
            <h2 className={clsx(
              'text-lg font-bold',
              lessonGroup.id === selectedLesson?.groupId && 'text-primary'
            )}>
              {lessonGroup.title}
            </h2>
            <ul className={''}>
              {
                lessonGroup.lessonList.map((lesson) => {
                  const selected = lesson.id === selectedLesson?.id;
                  if (lesson.sequence > completedLessonSequence + 1) {
                    return (
                      <li key={lesson.id}
                        className={clsx(
                          'border-l pl-4 text-md flex gap-2 justify-between items-center text-content-light/50',
                        )}>
                        {lesson.title}
                        <LockClosedIcon className="w-4 h-4" />
                      </li>
                    )
                  }
                  return <Link key={lesson.id} href={`${lesson.id}`} >
                    <li
                      className={clsx(
                        'border-l pl-4 text-md flex gap-2 justify-between items-center',
                        selected && 'border-l-primary border-l-2 text-primary font-bold',
                      )}>
                      {lesson.title}
                      {
                        selected ? <div className="flex w-4 h-4 rounded-full border border-amber-500">
                          <div className="w-2 h-2 rounded-full bg-amber-500 m-auto" />
                        </div> : <CheckCircleIcon className="w-4 h-4 text-primary" />
                      }

                    </li>
                  </Link>
                })
              }
            </ul>
          </Fragment>
        ))
      }
    </nav>
  )
}