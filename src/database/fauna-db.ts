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
