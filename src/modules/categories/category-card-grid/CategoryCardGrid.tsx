import { FC } from "react";
import { CategoryCard } from "../category-card/CategoryCard";
import { CategoryCardGridcontent } from './category-card-grid.content';
import { CategoryCardV2 } from "../category-card/CategoryCardV2";

export const CategoryCardGrid: FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4 my-8">
      {
        CategoryCardGridcontent.map((item, index) => {
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