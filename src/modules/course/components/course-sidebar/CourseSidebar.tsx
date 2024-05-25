'use client';
import clsx from "clsx";
import Link from "next/link";
import { FC, Fragment } from "react";
import { useCourseSelection } from "../../hooks/useCourseSelection";
import { LessonGroupModel } from "../../models/course.model";

interface CourseSidebarProps {
  lessonGroupData: LessonGroupModel[];
}
export const CourseSidebar: FC<CourseSidebarProps> = ({ lessonGroupData }) => {
  const { selectedLesson } = useCourseSelection();
  return (
    <nav className={clsx('flex flex-col gap-4 sm:w-56 py-4 px-6 border-r flex-1')}>
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
                  return <Link key={lesson.id} href={`${lesson.id}`}>
                    <li
                      className={clsx(
                        'border-l pl-4 text-md cursor-pointer',
                        selected && 'border-l-primary border-l-2 text-primary font-bold',
                        !selected && 'text-content-light'
                      )}>
                      {lesson.title}
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