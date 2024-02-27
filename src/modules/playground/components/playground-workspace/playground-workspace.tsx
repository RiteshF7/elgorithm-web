import {FC} from "react";
import {PlaygrountContent} from "@/content/banner-main/playgrount-content";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";

export const PlaygroundWorkspace: FC = () => {
    return (
        <div className={'flex flex-col gap-4 bg-black h-96 w-full'}>
            <PlaygroundEditor/>
            <PlaygroundActions/>

        </div>

    )
}