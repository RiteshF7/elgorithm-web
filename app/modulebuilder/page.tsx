import { FC } from 'react';
import { PlayGroundContainer } from "@/modules/playground/components/playground-container/PlaygroundContainer";
import ModuleBuilder from "@/modules/modulebuilder/ModuleBuilder";

const ModuleBuilderPage: FC = () => {
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <div className={'p-4'}>
                <ModuleBuilder />
            </div>
        </main >
    )
}

export default ModuleBuilderPage;
