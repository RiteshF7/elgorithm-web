import { NextRequest } from "next/server";
import { CategoryLessons } from "../category-lessons.db";

export const GET = (
  request: NextRequest,
  context: { params: { categoryId: string } }
) => {
  const lessonGroupData = CategoryLessons[context.params.categoryId];
  return Response.json(lessonGroupData || {});
};
