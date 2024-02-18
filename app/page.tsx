import {BannerMain} from "@/modules/home/banner-main/BannerMain";
import {BannerMainContent} from "@/content/banner-main/banner-main.content";
import {CategoryGrid} from "@/modules/home/category-grid/CategoryGrid";
import {CategoryGridContent} from "@/content/banner-main/category-grid.content";

export default function Home() {
    return (
        <>
            <BannerMain {...BannerMainContent}/>
            <CategoryGrid {...CategoryGridContent}/>
        </>
    );
}
