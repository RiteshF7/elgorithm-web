import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu } from 'lucide-react';
import {FC, Key} from "react";
import {Header} from "@/modules/common/components/header/Header";

interface Content {
    state: any
}

export const ContentPage: FC<Content> = ({state}) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <Header/>

            {/* Main Content */}
            <main className="flex-grow mt-16 md:mt-20">
                <div className="container mx-auto px-4 py-8 md:flex">
                    {/* Article Content */}
                    <article className="md:w-screen md:pr-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                            {state.content.title}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                            {state.content.description}
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <img
                                src={state.content.media.image.url}
                                alt=""
                                className="w-[600px] h-[200px] object-cover rounded-lg shadow-md mb-6"
                            />
                            <p>
                                As we move further into the digital age, web development continues to evolve at a rapid
                                pace.
                                New technologies, frameworks, and methodologies are constantly emerging, reshaping the
                                way we
                                build and interact with websites and web applications.
                            </p>

                            {/* Render the Section components dynamically */}
                            {state.content.articleSections.map((section: {
                                title: string;
                                content: string;
                            }, index: Key | null | undefined) => (
                                <Section key={index} title={section.title} content={section.content}/>
                            ))}

                            {/* Video Embed */}
                            <div className="aspect-w-16 aspect-h-9 my-8">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg shadow-md"
                                ></iframe>
                            </div>
                        </div>
                    </article>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h5 className="text-lg font-semibold mb-4">About Us</h5>
                            <p className="text-gray-400">
                                We're passionate about sharing knowledge and insights on web development trends and best practices.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                            <ul className="space-y-2">
                                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                            <div className="flex space-x-4">
                                {/* Add social media icons here */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ContentPage;

interface SectionProps {
    title: string;
    content: string;
}

const Section = ({ title, content }: SectionProps) => (
    <div className="mt-8">
        <h3 className="text-2xl font-serif font-semibold mb-4">{title}</h3>
        <p>{content}</p>
    </div>
);

