export interface LessonModel {
  groupId: number;
  id: number;
  title: string;
  description: string;
  duration: number;
  sequence: number;
  playgroundData:any
}

export interface LessonGroupModel {
  id: number;
  title: string;
  lessonList: LessonModel[];
}
