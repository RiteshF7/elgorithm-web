import { CategoryCardGrid } from "@/modules/categories/category-card-grid/CategoryCardGrid";
import { CategoryTitleDescription } from "@/modules/categories/category-title-description/CategoryTitleDescription";
import { FC } from "react";

const CategoryPage: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <CategoryTitleDescription />
      <CategoryCardGrid />
    </div>
  )
}

export default CategoryPage;