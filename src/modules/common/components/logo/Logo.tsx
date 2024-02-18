import Image from "next/image";
import {FC} from "react";
import clsx from "clsx";

const LOGO_URL = '/next.svg';

export const Logo: FC<{ className?: string }> = ({className}) => {
    return (
        <Image src={LOGO_URL} alt={'logo'}
               width={96} height={24}
               priority
               className={clsx(className, 'h-6 object-contain')}
        />
    )
}
