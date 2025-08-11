import React from 'react';
import { ContentCard, ContentCardProps } from './ContentCard';

interface ContentCardListProps {
    cards: ContentCardProps[];
}

export const ContentCardList: React.FC<ContentCardListProps> = ({ cards }) => {
    return (
        <div className="space-y-8">
            {cards.map((card, index) => (
                <ContentCard key={index} {...card} />
            ))}
        </div>
    );
};
