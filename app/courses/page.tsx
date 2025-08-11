'use client'
import {useEffect, useState} from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  description: string;
}

const mockCategories: Category[] = [
    {id: '1', name: 'Course 1', description: 'This is the first course.'},
    {id: '2', name: 'Course 2', description: 'This is the second course.'},
    {id: '3', name: 'Course 3', description: 'This is the third course.'},
];

const getCategoryList = async (): Promise<Category[]> => {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Promise.resolve(mockCategories);
}

const CoursesPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategoryList().then(r => {
            setCategories(r);
            setLoading(false);
        }).catch(e => {
            console.log(e);
            setLoading(false);
        });
    }, []);

    return (
        <main className="flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-4 mt-20">
            <h1 className="text-4xl font-bold">Courses</h1>
            {loading ? (
                <p>Loading courses...</p>
            ) : categories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <Link key={category.id} href={`/course/${category.id}/1`}>
                            <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow">
                                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>No courses available at the moment.</p>
            )}
        </main>
    );
}

export default CoursesPage;
