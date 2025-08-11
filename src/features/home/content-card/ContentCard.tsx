import {FC} from "react";
import clsx from "clsx";
import Image from "next/image";

export interface ContentCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    imageAlt?: string;
    direction?: 'ltr' | 'rtl';
}

export const    ContentCard: FC<ContentCardProps> = ({
                                                      title,
                                                      description,
                                                      imageUrl,
                                                      imageAlt,
                                                      direction = 'ltr'
                                                  }) => {
    return (
        <div className={clsx(
            'grid gap-4  items-center',
            imageUrl ? 'grid-cols-2' : 'grid-cols-1',
        )}>
            <div className={clsx('flex flex-col gap-4 flex-grow', !imageUrl && 'text-center items-center')}>
                <h3 className={'h3'}>
                    {title}
                </h3>
                <p className={'text-content-light text-lg max-w-2xl'}>
                    {description}
                </p>
            </div>
            {
                imageUrl && (
                    <Image src={imageUrl} alt={imageAlt || title}
                           width={500} height={330}
                           className={clsx(direction === 'rtl' ? '-order-1' : 'order-2')}/>
                )
            }
        </div>
    )
}
