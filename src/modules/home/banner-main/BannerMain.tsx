import {FC, useMemo} from 'react';
import {Button} from "@/modules/common/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export interface BannerMainProps {
    title: string;
    titleHighlight: string;
    description: string;
    actionText: string;
    actionUrl: string;
    imageUrl: string;
}

export const BannerMain: FC<BannerMainProps> = ({
                                                    title,
                                                    titleHighlight,
                                                    description,
                                                    imageUrl,
                                                    actionText,
                                                    actionUrl
                                                }) => {

    const renderHeaderText = useMemo(() => {
        const titleParts = title.split(titleHighlight);
        return (
            <>
                {titleParts[0]}
                <span className={'text-secondary'}>{titleHighlight}</span>
                {titleParts[1]}
            </>
        )
    }, [title, titleHighlight])
    return (
        <div className={'flex gap-4 flex-col-reverse lg:flex-row items-center'}>

            <Image
                src={imageUrl}
                alt="Main banner"
                width={300}
                height={228}
                className="flex-shrink-0 h-auto rounded-lg shadow-lg"
            />
            <div className={'flex flex-col gap-4'}>
                <h1 className={'h1'}>
                    {renderHeaderText}
                </h1>
                <p className={'text-md'}>
                    {description}
                </p>
                {(actionText !=='')?
                    <Link href={actionUrl}>
                    <Button uiType={'primary'} className={'lg:w-48 py-2.5'}>
                    <p className={'text-lg'}>{actionText}</p>
                    </Button>
                    </Link>
                    :<div/>
                }
            </div>
        </div>
    )
}
