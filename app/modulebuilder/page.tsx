import { FC } from 'react';
import ModuleBuilder from "@/modules/modulebuilder/modulebuilder";


const ModuleBuilderPage: FC = () => {
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 '}>
            <div className={'p-4'}>
                <ModuleBuilder/>
            </div>
        </main >
    )
}

export default ModuleBuilderPage;
