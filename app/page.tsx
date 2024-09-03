import { BannerMain } from "@/modules/home/banner-main/BannerMain";
import { BannerMainContent } from "@/content/banner-main/banner-main.content";
import { CategoryGrid } from "@/modules/home/category-grid/CategoryGrid";
import { CategoryGridContent } from "@/content/banner-main/category-grid.content";
import { ContentCardList } from "@/modules/home/content-card/ContentCardList";
import { ContentCardsContent } from "@/content/banner-main/content-cards.content";
import {CategoryTitleDescription} from "@/modules/categories/category-title-description/CategoryTitleDescription";
import {CategoryCardGrid} from "@/modules/categories/category-card-grid/CategoryCardGrid";

export default function Home() {
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <BannerMain {...BannerMainContent} />
            <CategoryGrid {...CategoryGridContent} />
            <ContentCardList className={'mx-auto max-w-6xl'} contentCards={ContentCardsContent} />
        </main>
    );
}
