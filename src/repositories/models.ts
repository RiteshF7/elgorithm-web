export interface Level {
    title: string;
    description: string;
    bgImageUrl: string;
    infoPoints: string[];
    link: string;
    totalCourses: number;
    totalDuration: number;
    level: string;
}

export interface Category {
    title: string;
    description: string;
    levelId: string;
}

export interface Lesson {
    title: string;
    description: string;
    categoryId: string;
}
