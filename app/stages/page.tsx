'use client'
import {useEffect, useState} from 'react';
import {CategoryCardGrid} from "@/modules/categories/category-card-grid/CategoryCardGrid";
import {CategoryTitleDescription} from "@/modules/categories/category-title-description/CategoryTitleDescription";
import {ContentCardList} from "@/modules/home/content-card/ContentCardList";
import {ContentCardsContent} from "@/content/banner-main/content-cards.content";
import {CategoryModel} from "@/modules/categories/models/category.model";
import {ProjectPage} from "@/components/component/project-page";
import {projectList} from "@/content/projects-conrent";
import {BannerMain} from "@/modules/home/banner-main/BannerMain";
import {BannerMainContent} from "@/content/banner-main/banner-main.content";
import {ContentCard} from "@/modules/home/content-card/ContentCard";


const getCategoryList = async (): Promise<CategoryModel[]> => {
    const response = await fetch(`http://localhost:3000/api/stage`);
    return response.json();
}

const SelectStagePage = () => {
    const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
    const bannerContent = {
        title: 'Stay motivated',
        description: 'Form a real learning habit with fun content that’s always well-paced, game-like progress tracking, and friendly reminders',
        imageUrl: '/home/stay-motivated.svg',
        imageAlt: 'Stay motivated'
    }
    useEffect(() => {
        getCategoryList().then(r => setCategoryList(r)).catch(e => console.log(e));
    }, []);

    return (

        <main className="flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-4">
            <div className="ml-5 order-first bg-gray-200 border border-gray-300 shadow-md rounded-lg">
                <ContentCard {...bannerContent} direction="rtl"/>
            </div>

                <h1 className="h1 ml-5">Hardware Projects</h1>



            <ProjectPage projects={projectList}/>
                <h1 className="h1 ml-5">Virtual Projects</h1>
                <ProjectPage projects={projectList}/>
        </main>
);
}

export default SelectStagePage;
