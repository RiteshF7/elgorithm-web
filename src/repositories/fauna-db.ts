const faunadb = require('faunadb');
const client = new faunadb.Client({
    secret: 'fnAFiVRwkAAAQPj1uOMiKCxwQXM3HhxYudOoew-T', domain: 'db.fauna.com',
    scheme: 'https',
});
const q = faunadb.query;


export const getLevelList = async () => {
    return await fetchAllDocuments('levels');
}

export const fetchAllDocuments = async <T>(collectionName: string): Promise<(T & { id: string })[]> => {
    const result = await client.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection(collectionName))),
            q.Lambda('X', q.Get(q.Var('X')))
        )
    );

    return result.data.map((doc: any) => ({
        id: doc.ref.id,
        ...doc.data
    }));
};

export async function getCategoriesByLevel(levelId: String) {
    try {
        const categories = await client.query(
            q.Map(
                q.Paginate(q.Match(q.Index('categories_by_level'), q.Ref(q.Collection('levels'), levelId))),
                q.Lambda('categoryRef', q.Get(q.Var('categoryRef')))
            )
        );

        console.log('Categories for level', levelId, ':', categories.data);
        return categories.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

async function getLessonsByCategory(categoryId: String) {
    try {
        const lessons = await client.query(
            q.Map(
                q.Paginate(q.Match(q.Index('lessons_by_category'), q.Ref(q.Collection('categories'), categoryId))),
                q.Lambda('lessonRef', q.Get(q.Var('lessonRef')))
            )
        );

        console.log('Lessons for category', categoryId, ':', lessons.data);
        return lessons.data;
    } catch (error) {
        console.error('Error fetching lessons:', error);
    }
}

export async function createLevel(levelData: Level) {
    try {
        const level = await client.query(
            q.Create(
                q.Collection('levels'),
                {data: levelData}
            )
        );

        console.log('Level created: 1', level.ref.id,levelData);



        return level.ref.id;
    } catch (error) {
        console.error('Error creating level:', error);
    }
}

async function createCategory(categoryData: Category): Promise<string | undefined> {

    // const categoryData: Category = {
    //     description: "learn logical building",
    //     levelId: q.Ref(q.Collection("levels"), level.ref.id),
    //     title: "Logical building"
    // }
    // await createCategory(categoryData);
    try {
        const category = await client.query(
            q.Create(
                q.Collection('categories'),
                {data: categoryData}
            )
        );
        console.log('Category created:', category.ref.id);


        return category.ref.id;
    } catch (error) {
        console.error('Error creating category:', error);
        return undefined;
    }
}

async function createLesson(lessonData: Lesson): Promise<string | undefined> {
    // const lessonData: Lesson = {
    //     title: "Turn pixel right",
    //     description: "Turn pixel right",
    //     categoryId: q.Ref(q.Collection("categories"), category.ref.id),
    //
    // }
    try {
        const lesson = await client.query(
            q.Create(
                q.Collection('lessons'),
                {data: lessonData}
            )
        );

        console.log('Lesson created:', lesson.ref.id);
        return lesson.ref.id;
    } catch (error) {
        console.error('Error creating lesson:', error);
        return undefined;
    }
}


