import React from 'react';

interface BannerMainProps {
    title: string;
    titleHighlight?: string;
    description: string;
    actionText?: string;
    actionUrl?: string;
    imageUrl?: string;
}

export const BannerMain: React.FC<BannerMainProps> = ({
    title,
    titleHighlight,
    description,
    actionText,
    actionUrl,
    imageUrl
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {title}
                    {titleHighlight && (
                        <span className="text-blue-600 block">{titleHighlight}</span>
                    )}
                </h1>
                {description && (
                    <p className="text-xl text-gray-600 mb-6">{description}</p>
                )}
                {actionText && actionUrl && (
                    <a
                        href={actionUrl}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        {actionText}
                    </a>
                )}
            </div>
            {imageUrl && (
                <div className="flex-1 flex justify-center">
                    <img
                        src={imageUrl}
                        alt="Banner"
                        className="max-w-md w-full h-auto"
                    />
                </div>
            )}
        </div>
    );
};
