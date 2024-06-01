import { query as q } from 'faunadb';

// Exporting the query object and individual functions for convenience
const FaunaQuery = {
    ...q,
    Map: q.Map,
    Paginate: q.Paginate,
    Lambda: q.Lambda,
    Create: q.Create,
    Collection: q.Collection,
    Get: q.Get,
    Match: q.Match,
    Index: q.Index,
    Ref: q.Ref,
    Let: q.Let,
    Var: q.Var,
    If: q.If,
    Select: q.Select,
    Update: q.Update,
    Delete: q.Delete,
    Do: q.Do,
    // Add more functions as needed
};

export default FaunaQuery;
