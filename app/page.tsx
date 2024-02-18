import {BannerMain} from "@/modules/home/banner-main/BannerMain";
import {BannerMainContent} from "@/content/banner-main/banner-main.content";
import {CategoryGrid} from "@/modules/home/category-grid/CategoryGrid";
import {CategoryGridContent} from "@/content/banner-main/category-grid.content";
import {ContentCardList} from "@/modules/home/content-card/ContentCardList";
import {ContentCardsContent} from "@/content/banner-main/content-cards.content";

export default function Home() {
    return (
        <>
            <BannerMain {...BannerMainContent}/>
            <CategoryGrid {...CategoryGridContent}/>
            <ContentCardList className={'mx-auto max-w-6xl'} contentCards={ContentCardsContent}/>
        </>
    );
}
