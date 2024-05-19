export interface LessonModel {
  groupId: number;
  id: number;
  title: string;
  description: string;
  duration: number;
  priority?: number;
}

export interface LessonGroupModel {
  id: number;
  title: string;
  lessonList: LessonModel[];
  priority?: number;
}
