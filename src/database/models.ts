interface Level {
    title: string;
    description: string;
    bgImageUrl: string;
    infoPoints: string[];
    link: string;
    totalCourses: number;
    totalDuration: number;
    level: string;
}

interface Category {
    title: string;
    description: string;
    levelId: string;
}

interface Lesson {
    title: string;
    description: string;
    categoryId: string;
}
