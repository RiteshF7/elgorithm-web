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
import {Header} from "@/modules/common/components/header/Header";


const getCategoryList = async (): Promise<CategoryModel[]> => {
    const response = await fetch(`http://localhost:3000/api/stage`);
    return response.json();
}

const SelectStagePage = () => {
    const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);
    const bannerContent = {
        title: 'Explore These Exciting Robotics Projects!',
        titleHighlight:"Robotics",
        description: '',
        actionText : "",
        actionUrl:"",
        imageUrl: '/home/stay-motivated.svg',
    }
    useEffect(() => {
        getCategoryList().then(r => setCategoryList(r)).catch(e => console.log(e));
    }, []);

    return (

        <main className="flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-4">

            <Header/>
            <div className={'bg-gray-100 p-10 mt-20'}>
                <BannerMain {...bannerContent} ></BannerMain>
            </div>


            <div className={'mb-5'}/>

            <h3 className="h3 ml-5">Hardware Projects</h3>
            <hr style={{border: '1px solid #ddd'}}/>

            <ProjectPage projects={projectList}/>
            <h1 className="h1 ml-5">Virtual Projects</h1>
            <hr style={{border: '1px solid #ddd'}}/>

            <ProjectPage projects={projectList}/>
        </main>
    );
}

export default SelectStagePage;
