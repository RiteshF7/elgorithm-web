import { CategoryCardGrid } from "@/modules/categories/category-card-grid/CategoryCardGrid";
import { CategoryTitleDescription } from "@/modules/categories/category-title-description/CategoryTitleDescription";
import { FC } from "react";
import { ContentCardList } from "@/modules/home/content-card/ContentCardList";
import { ContentCardsContent } from "@/content/banner-main/content-cards.content";
import { CategoryModel } from "@/modules/categories/models/category.model";

const BASE_URL = process.env.API_ENDPOINT;

const getCategoryList = async (): Promise<CategoryModel[]> => {
  console.log('BASE_URL', BASE_URL);
  return (await fetch(`${BASE_URL}/api/category/list?detailed=true`)).json();
}

const CategoryPage: FC = async () => {
  const categoryList = await getCategoryList();
  return (
    <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-4'}>
      <CategoryTitleDescription />
      <CategoryCardGrid categoryList={categoryList} />
      <ContentCardList className={'mx-auto max-w-6xl'} contentCards={ContentCardsContent} />
    </main>
  )
}

export default CategoryPage;