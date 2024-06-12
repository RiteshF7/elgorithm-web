'use client'
import {useEffect, useState} from 'react';
import {CategoryCardGrid} from "@/modules/categories/category-card-grid/CategoryCardGrid";
import {CategoryTitleDescription} from "@/modules/categories/category-title-description/CategoryTitleDescription";
import {ContentCardList} from "@/modules/home/content-card/ContentCardList";
import {ContentCardsContent} from "@/content/banner-main/content-cards.content";
import {CategoryModel} from "@/modules/categories/models/category.model";



const getCategoryList = async (): Promise<CategoryModel[]> => {
    const response = await fetch(`http://localhost:3000/api/stage`);
    return response.json() ;
}

const CategoryPage = () => {
    const [categoryList, setCategoryList] = useState<CategoryModel[]>([]);

    useEffect(() => {
        getCategoryList().then(r => setCategoryList(r)).catch(e => console.log(e));
    }, []);

    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-4'}>
            <CategoryTitleDescription/>
            <CategoryCardGrid categoryList={categoryList}/>
            <ContentCardList className={'mx-auto max-w-6xl'} contentCards={ContentCardsContent}/>
        </main>
    );
}

export default CategoryPage;
