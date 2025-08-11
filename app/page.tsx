'use client'
import {Header} from "@/features/common/components/header/Header";
import {NewLandingPage} from "@/features/home/components/new-landing-page/NewLandingPage";


export default function Home() {
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <Header/>
            <div className={'mt-20'}>
                <NewLandingPage/>
            </div>
        </main>
    );
}
