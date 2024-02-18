import {FC} from "react";
import {ContentCard, ContentCardProps} from "@/modules/home/content-card/ContentCard";
import clsx from "clsx";

interface ContentCardListProps {
    contentCards: ContentCardProps[];
    className?: string;
}

export const ContentCardList: FC<ContentCardListProps> = ({contentCards, className}) => {
    return (
        <div className={clsx('flex flex-col gap-10', className)}>
            {
                contentCards.map((contentCard, index) => {
                    return (
                        <div key={index}>
                            <ContentCard {...contentCard} direction={index % 2 === 0 ? 'ltr' : 'rtl'}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
