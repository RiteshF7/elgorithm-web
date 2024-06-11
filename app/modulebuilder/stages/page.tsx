'use client'
import {FC} from 'react';

import StageSelector from "@/modules/modulebuilder/StageSelector";
import {router} from "next/client";
import Base from "@/modules/modulebuilder/Base";

const Stages: FC = () => {
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 '}>
            <div className={'p-4'}>
                <Base></Base>

            </div>
        </main>
    )
}

export default Stages;
