import { LessonGroupModel } from "@/modules/course/models/course.model";


export const newData = {
  title: "No Code to ",
  description:
      "Requires no coding experience. Suitable for age 9-12. Learn logic building from simple games",
  bgImageUrl: "/categories/category-1.png",
  infoPoints: [
    "Simple Logic Building Games",
    "Suitable for age 9-12",
    "Expert Guided Development",
  ],
  link: "/categories/no-code",
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
          playground:''
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
        },
        {
          id: 2,
          groupId: 1,
          title: "Game 2",
          description: "This is a sample game 2",
          duration: 10,
          sequence: 2,
        },
        {
          id: 3,
          groupId: 1,
          title: "Game 3",
          description: "This is a sample game 3",
          duration: 10,
          sequence: 3,
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
        },
        {
          id: 5,
          groupId: 2,
          title: "Game 5",
          description: "This is a sample game 5",
          duration: 10,
          sequence: 5,
        },
        {
          id: 6,
          groupId: 2,
          title: "Game 6",
          description: "This is a sample game 6",
          duration: 10,
          sequence: 6,
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
        },
        {
          id: 8,
          groupId: 3,
          title: "Game 8",
          description: "This is a sample game 8",
          duration: 10,
          sequence: 8,
        },
        {
          id: 9,
          groupId: 3,
          title: "Game 9",
          description: "This is a sample game 9",
          duration: 10,
          sequence: 9,
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
        },
        {
          id: 2,
          groupId: 1,
          title: "Game 2",
          description: "This is a sample game 2",
          duration: 10,
          sequence: 11,
        },
        {
          id: 3,
          groupId: 1,
          title: "Game 3",
          description: "This is a sample game 3",
          duration: 10,
          sequence: 12,
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
        },
        {
          id: 5,
          groupId: 2,
          title: "Game 5",
          description: "This is a sample game 5",
          duration: 10,
          sequence: 2,
        },
        {
          id: 6,
          groupId: 2,
          title: "Game 6",
          description: "This is a sample game 6",
          duration: 10,
          sequence: 3,
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
        },
        {
          id: 8,
          groupId: 3,
          title: "Game 8",
          description: "This is a sample game 8",
          duration: 10,
          sequence: 5,
        },
        {
          id: 9,
          groupId: 3,
          title: "Game 9",
          description: "This is a sample game 9",
          duration: 10,
          sequence: 6,
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
        },
        {
          id: 2,
          groupId: 1,
          title: "Game 2",
          description: "This is a sample game 2",
          duration: 10,
          sequence: 2,
        },
        {
          id: 3,
          groupId: 1,
          title: "Game 3",
          description: "This is a sample game 3",
          duration: 10,
          sequence: 3,
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
        },
        {
          id: 5,
          groupId: 2,
          title: "Game 5",
          description: "This is a sample game 5",
          duration: 10,
          sequence: 5,
        },
        {
          id: 6,
          groupId: 2,
          title: "Game 6",
          description: "This is a sample game 6",
          duration: 10,
          sequence: 6,
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
        },
        {
          id: 8,
          groupId: 3,
          title: "Game 8",
          description: "This is a sample game 8",
          duration: 10,
          sequence: 8,
        },
        {
          id: 9,
          groupId: 3,
          title: "Game 9",
          description: "This is a sample game 9",
          duration: 10,
          sequence: 9,
        },
      ],
    },
  ],
};
