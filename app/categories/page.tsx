import { CategoryCardGrid } from "@/modules/categories/category-card-grid/CategoryCardGrid";
import { CategoryTitleDescription } from "@/modules/categories/category-title-description/CategoryTitleDescription";
import { FC } from "react";
import {ContentCardList} from "@/modules/home/content-card/ContentCardList";
import {ContentCardsContent} from "@/content/banner-main/content-cards.content";

const CategoryPage: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <CategoryTitleDescription />
      <CategoryCardGrid />

      <ContentCardList className={'mx-auto max-w-6xl'} contentCards={ContentCardsContent}/>

    </div>
  )
}

export default CategoryPage;