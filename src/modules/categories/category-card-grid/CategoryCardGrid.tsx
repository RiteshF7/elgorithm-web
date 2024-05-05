import { FC } from "react";
import { CategoryCard } from "../category-card/CategoryCard";
import { CategoryCardGridcontent } from './category-card-grid.content';

export const CategoryCardGrid: FC = () => {
  return (
    <div className="flex items-center justify-evenly gap-4 my-8">
      {
        CategoryCardGridcontent.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              bgImageUrl={item.bgImageUrl}
              title={item.title}
              description={item.description}
              infoPoints={item.infoPoints}
              link={item.link}
              totalCourses={item.totalCourses}
              totalDuration={item.totalDuration}
            />
          )
        })
      }
    </div>
  )
}