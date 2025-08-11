import { LessonGroupModel } from "@/features/courses/models/course.model";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";


export const newData = {
  title: "No Code to ",
  description:
      "Requires no coding experience. Suitable for age 9-12. Learn logic building from simple games",
  bgImageUrl: "/stages/category-1.png",
  infoPoints: [
    "Simple Logic Building Games",
    "Suitable for age 9-12",
    "Expert Guided Development",
  ],
  link: "/stages/no-code",
  totalCourses: 10,
  totalDuration: 8,
  level: "1",
  section:[
    {
      title:"Logical building",
      modules:[
        {
          title: "turn right ",
          description: "This is a sample game 1",
          duration: 10,
          playground:'Ref(Collection("Playgrounds"), "399693427701186624")'
        },
        {
          title: "turn left",
          description: "This is a sample game 2",
          duration: 10,
          playground:''
        },
      ]
    }
  ]
}
export const CategoryLessons: Record<string, LessonGroupModel[]> = {
  "1": [
    {
      id: 1,
      title: "Logic Building",
      lessonList: [
        {
          id: 1,
          groupId: 1,
          title: "Game 1",
          description: "This is a sample game 1",
          duration: 10,
          sequence: 1,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 2,
          groupId: 1,
          title: "Game 2",
          description: "This is a sample game 2",
          duration: 10,
          sequence: 2,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 3,
          groupId: 1,
          title: "Game 3",
          description: "This is a sample game 3",
          duration: 10,
          sequence: 3,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
    {
      id: 2,
      title: "Logic Building 2",
      lessonList: [
        {
          id: 4,
          groupId: 2,
          title: "Game 4",
          description: "This is a sample game 4",
          duration: 10,
          sequence: 4,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 5,
          groupId: 2,
          title: "Game 5",
          description: "This is a sample game 5",
          duration: 10,
          sequence: 5,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 6,
          groupId: 2,
          title: "Game 6",
          description: "This is a sample game 6",
          duration: 10,
          sequence: 6,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
    {
      id: 3,
      title: "Logic Building 3",
      lessonList: [
        {
          id: 7,
          groupId: 3,
          title: "Game 7",
          description: "This is a sample game 7",
          duration: 10,
          sequence: 7,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 8,
          groupId: 3,
          title: "Game 8",
          description: "This is a sample game 8",
          duration: 10,
          sequence: 8,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 9,
          groupId: 3,
          title: "Game 9",
          description: "This is a sample game 9",
          duration: 10,
          sequence: 9,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
  ],
  "2": [
    {
      id: 1,
      title: "Logic Building",
      lessonList: [
        {
          id: 1,
          groupId: 1,
          title: "Game 1",
          description: "This is a sample game 1",
          duration: 10,
          sequence: 10,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 2,
          groupId: 1,
          title: "Game 2",
          description: "This is a sample game 2",
          duration: 10,
          sequence: 11,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 3,
          groupId: 1,
          title: "Game 3",
          description: "This is a sample game 3",
          duration: 10,
          sequence: 12,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
    {
      id: 2,
      title: "Logic Building 2",
      lessonList: [
        {
          id: 4,
          groupId: 2,
          title: "Game 4",
          description: "This is a sample game 4",
          duration: 10,
          sequence: 1,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 5,
          groupId: 2,
          title: "Game 5",
          description: "This is a sample game 5",
          duration: 10,
          sequence: 2,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 6,
          groupId: 2,
          title: "Game 6",
          description: "This is a sample game 6",
          duration: 10,
          sequence: 3,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
    {
      id: 3,
      title: "Logic Building 3",
      lessonList: [
        {
          id: 7,
          groupId: 3,
          title: "Game 7",
          description: "This is a sample game 7",
          duration: 10,
          sequence: 4,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 8,
          groupId: 3,
          title: "Game 8",
          description: "This is a sample game 8",
          duration: 10,
          sequence: 5,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 9,
          groupId: 3,
          title: "Game 9",
          description: "This is a sample game 9",
          duration: 10,
          sequence: 6,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
  ],
  "3": [
    {
      id: 1,
      title: "Logic Building",
      lessonList: [
        {
          id: 1,
          groupId: 1,
          title: "Game 1",
          description: "This is a sample game 1",
          duration: 10,
          sequence: 1,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 2,
          groupId: 1,
          title: "Game 2",
          description: "This is a sample game 2",
          duration: 10,
          sequence: 2,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 3,
          groupId: 1,
          title: "Game 3",
          description: "This is a sample game 3",
          duration: 10,
          sequence: 3,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
    {
      id: 2,
      title: "Logic Building 2",
      lessonList: [
        {
          id: 4,
          groupId: 2,
          title: "Game 4",
          description: "This is a sample game 4",
          duration: 10,
          sequence: 4,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 5,
          groupId: 2,
          title: "Game 5",
          description: "This is a sample game 5",
          duration: 10,
          sequence: 5,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 6,
          groupId: 2,
          title: "Game 6",
          description: "This is a sample game 6",
          duration: 10,
          sequence: 6,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
    {
      id: 3,
      title: "Logic Building 3",
      lessonList: [
        {
          id: 7,
          groupId: 3,
          title: "Game 7",
          description: "This is a sample game 7",
          duration: 10,
          sequence: 7,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 8,
          groupId: 3,
          title: "Game 8",
          description: "This is a sample game 8",
          duration: 10,
          sequence: 8,
          playgroundData:PlaygroundContainerContent[14]
        },
        {
          id: 9,
          groupId: 3,
          title: "Game 9",
          description: "This is a sample game 9",
          duration: 10,
          sequence: 9,
          playgroundData:PlaygroundContainerContent[14]
        },
      ],
    },
  ],
};
