import {FC} from 'react';
import {Button} from "@/modules/common/components/button/Button";
import Image from "next/image";

export const BannerMain: FC = () => {
    return (
        <div className={'flex gap-4 flex-col-reverse lg:flex-row items-center'}>
            <div className={'flex flex-col gap-4'}>
                <h1 className={'h1'}>
                    The best way to learn <span className={'text-secondary'}>math and computer science</span>
                </h1>
                <p className={'text-md'}>
                    Guided interactive problem solving that&apos;s effective and fun. Master concepts in 15 minutes a
                    day.
                </p>
                <Button uiType={'primary'} className={'lg:w-48 py-2.5'}>
                    <p className={'text-lg'}>Get Started</p>
                </Button>
            </div>
            <Image src={'/home/main-banner.png'} alt={'Main banner'} width={533} height={328} className={'flex-shrink-0 h-auto'}/>
        </div>
    )
}
