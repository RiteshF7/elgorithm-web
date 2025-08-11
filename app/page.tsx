'use client'
import {BannerMain} from "@/modules/home/banner-main/BannerMain";
import {BannerMainContent} from "@/content/banner-main/banner-main.content";
import {CategoryGrid} from "@/modules/home/category-grid/CategoryGrid";
import {CategoryGridContent} from "@/content/banner-main/category-grid.content";
import {ContentCardList} from "@/modules/home/content-card/ContentCardList";
import {ContentCardsContent} from "@/content/banner-main/content-cards.content";
import {CategoryTitleDescription} from "@/modules/categories/category-title-description/CategoryTitleDescription";
import {Header} from "@/modules/common/components/header/Header";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {SWPlayGroundContainer} from "@/modules/playground/components/playground-container/swPlaygroundContainer";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// export default function Home() {
//     const router = useRouter();
//
//     useEffect(() => {
//         router.push('/swplayground/1');
//     }, [router]);
//
//     return null; // or a loading indicator while redirecting
// }
export default function Home() {
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <Header/>
            <div className={'mt-20'}>
                <BannerMain {...BannerMainContent} />
                <div className={'mt-20 mb-20'}>
                    <CategoryGrid {...CategoryGridContent} />
                </div>
                <ContentCardList className={'mx-auto max-w-6xl'} contentCards={ContentCardsContent} />
            </div>
        </main>
    );
}
