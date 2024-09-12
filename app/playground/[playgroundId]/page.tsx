'use client'
import { FC } from 'react';
import { PlayGroundContainer } from "@/modules/playground/components/playground-container/PlaygroundContainer";
import { PlaygroundContainerContent } from "@/content/banner-main/playground-container.content";
import { ProjectsContent, ProjectTypes } from "@/content/banner-main/playground-content";
import ContentPage from "@/modules/ContentPage";

const PlayGroundLessonPage: FC<{ params: { playgroundId: string } }> = ({ params }) => {

    const projectId = params.playgroundId ?? '0';
    const project = (ProjectsContent as { [key: string]: any })[projectId];
    console.log(project, 'project ttt');

    return (
        <main className="flex flex-col">
            {project?.type === ProjectTypes.CONTENT ? (
                <ContentPage state={project} />
            ) : (
                <PlayGroundContainer state={project} />
            )}
        </main>
    );
}

export default PlayGroundLessonPage;
