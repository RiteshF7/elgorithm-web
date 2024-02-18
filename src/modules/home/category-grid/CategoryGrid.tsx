import {FC} from 'react';
import Image from "next/image";
import clsx from "clsx";

export interface CategoryGridItem {
    imageUrl: string;
    text: string;
    url: string;
}

export interface CategoryGridProps {
    categories: CategoryGridItem[];
}

export const CategoryGrid: FC<CategoryGridProps> = ({categories}) => {
    return (
        <div className={'flex justify-evenly'}>
            {
                categories.map((category, index) => {
                    return (
                        <div key={index} className={clsx(
                            'flex flex-col gap-2 items-center w-56',
                            'border-r last:border-none'
                        )}>
                            <Image src={category.imageUrl}
                                   alt={category.text}
                                   width={64} height={64}
                                   className={'h-16 w-16'}/>
                            <span className={'text-md'}>{category.text}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
