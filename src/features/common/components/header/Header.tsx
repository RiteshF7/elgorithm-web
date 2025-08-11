import {FC} from 'react';
import {Logo} from "@/features/common/components/logo/Logo";
import {Button} from "@/features/common/components/button/Button";
import Link from "next/link";
import {AuthStatus} from "@/features/common/components/header/AuthStatus";


export const Header: FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
                    Logo
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                    <Link href="/courses" className="text-gray-600 hover:text-gray-800">Courses</Link>
                    <Link href="/stages" className="text-gray-600 hover:text-gray-800">Categories</Link>
                    {/*<Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>*/}
                    {/*<Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>*/}
                </nav>
                <div className="flex items-center space-x-4">
                    <AuthStatus />
                </div>
            </div>
        </header>
    );
}
