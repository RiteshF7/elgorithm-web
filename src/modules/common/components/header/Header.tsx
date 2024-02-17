import {FC} from 'react';
import {Logo} from "@/modules/common/components/logo/Logo";
import {Button} from "@/modules/common/components/button/Button";


export const Header: FC = () => {
    return (
        <header className={'bg-foreground gap-2 shadow-bottom'}>
            <div className={'flex justify-between items-center mx-auto max-w-6xl px-2 h-14'}>
                <Logo/>
                <div className={'flex items-center gap-2'}>
                    <Button uiType={'secondary'}>
                        <span className={'text-base font-bold'}>Login</span>
                    </Button>
                    <Button uiType={'primary'}>
                        <span className={'text-base font-bold'}>Get started</span>
                    </Button>
                </div>

            </div>
        </header>
    )
}
