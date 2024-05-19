import { NextRequest } from "next/server";
import { categoryListData } from "../category.db";

export const GET = (req: NextRequest) => {
  const detailed = req.nextUrl.searchParams.get("detailed");
  if (detailed === "true" || detailed === "1") {
    return Response.json(categoryListData);
  }
  return Response.json(
    categoryListData.map(({ title, level }) => ({
      title,
      level,
    }))
  );
};
