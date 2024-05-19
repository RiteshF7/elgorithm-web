import { FC } from "react";
import { CategoryCardV2 } from "../category-card/CategoryCardV2";
import { CategoryModel } from "../models/category.model";

export const CategoryCardGrid: FC<{ categoryList: CategoryModel[] }> = ({ categoryList }) => {
  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4 my-8">
      {
        categoryList.map((item, index) => {
          return (
            <CategoryCardV2
              key={index}
              bgImageUrl={item.bgImageUrl}
              title={item.title}
              description={item.description}
              link={item.link}
              level={item.level}
              totalCourses={item.totalCourses}
              totalDuration={item.totalDuration}
            />
          )
        })
      }
    </div>
  )
}