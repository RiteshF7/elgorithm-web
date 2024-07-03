'use client'
import { CourseSelectionController } from "@/modules/course/components/course-selection-controller/CourseSelectionController";
import { CourseViewContainer } from "@/modules/course/components/course-view-container/CourseViewContainer";
import { FC } from "react";
import {PlayGroundContainer} from "@/modules/playground/components/playground-container/PlaygroundContainer";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";

const LessonPage: FC<{ params: { lessonId: string } }> = ({ params }) => {
  return (
      <>
          <CourseSelectionController routeLessonId={+params.lessonId}/>
          <div className="w-full flex justify-center">

              <CourseViewContainer>
                  <PlayGroundContainer state={PlaygroundContainerContent[parseInt(params.lessonId)]}/>
              </CourseViewContainer>
          </div>

      </>
  )
}

export default LessonPage;