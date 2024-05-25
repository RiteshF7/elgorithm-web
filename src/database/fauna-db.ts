const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({
    secret: process.env.FAUNA_SECRET
});
const q = faunadb.query;



export const getSnippet = async () => {
    const {data} = await faunaClient.query(q.Map(q.Paginate(q.Documents(q.Collection('snippets'))), q.Lambda('ref', q.Get(q.Var('ref')))));
    // @ts-ignore
    const snippets = data.map( (snippet) =>{
        snippet.id = snippet.ref.id;
        delete snippet.ref;
        return snippet;
    })
    console.log(snippets,"working!")
};


// export const getFaunaDb = async () => {
//     const result = await faunaClient.query(q.Paginate(q.Match(q.Index('all_playgrounds'))));
//     return result.data;
// }