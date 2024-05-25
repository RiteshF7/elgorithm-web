export interface LessonModel {
  groupId: number;
  id: number;
  title: string;
  description: string;
  duration: number;
  sequence: number;
}

export interface LessonGroupModel {
  id: number;
  title: string;
  lessonList: LessonModel[];
}
