const faunadb = require('faunadb');
const client = new faunadb.Client({ secret: 'fnAFiP6nvdAAQDozVr_enfZPqeMOHd9qQApGXLH9',domain: 'db.fauna.com',
    scheme: 'https', });
const q = faunadb.query;


export const getSnippet = async () => {
    // const {data} = await faunaClient.query(q.Map(q.Paginate(q.Documents(q.Collection('snippets'))), q.Lambda('ref', q.Get(q.Var('ref')))));
    // // @ts-ignore
    // const snippets = data.map((snippet) => {
    //     snippet.id = snippet.ref.id;
    //     delete snippet.ref;
    //     return snippet;
    // })
    // console.log(snippets, "working!")
};

export const getSnippets = async () => {
    const data = client.query(
        q.ToDate('2024-10-10')
    )
    console.log(data,' ::data!')
    // const { data } = await faunaClient.query(
    //     q.Map(
    //         q.Paginate(q.Documents(q.Collection('snippets'))),
    //         q.Lambda('ref', q.Get(q.Var('ref')))
    //     )
    // );
    // // @ts-ignore
    //
    // const snippets = data.map((snippet) => {
    //     snippet.id = snippet.ref.id;
    //     delete snippet.ref;
    //     return snippet;
    // });
    //
    // console.log(snippets)
    // return snippets;
};

// export const getFaunaDb = async () => {
//     const result = await faunaClient.query(q.Paginate(q.Match(q.Index('all_playgrounds'))));
//     return result.data;
// }