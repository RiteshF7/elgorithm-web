'use client'
import { FC } from 'react';
import { PlayGroundContainer } from "@/features/playground/components/playground-container/PlaygroundContainer";
import { ProjectsContent, ProjectTypes } from "@/content/banner-main/playground-content";
import ContentPage from "@/features/ContentPage";

const PlayGroundContentPage: FC<{ params: { contentId: string } }> = ({ params }) => {

    const projectId = params.contentId ?? '0';
    const project = (ProjectsContent as { [key: string]: any })[projectId];

    return (
        <main className="flex flex-col">
            <ContentPage state={project} />
        </main>
    );
}

export default PlayGroundContentPage;
