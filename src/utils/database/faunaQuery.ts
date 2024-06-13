import faunadb from 'faunadb';
import FaunaQuery from './faunaUtils';

const client = new faunadb.Client({ secret: 'fnAFiVRwkAAAQPj1uOMiKCxwQXM3HhxYudOoew-T' });

// Function to get all documents from a collection
export const getAllDocuments = async (collectionName: string) => {
    try {
        let result =  await client.query(
            FaunaQuery.Map(
                FaunaQuery.Paginate(FaunaQuery.Documents(FaunaQuery.Collection('stages'))),
                FaunaQuery.Lambda('X', FaunaQuery.Select(['data'], FaunaQuery.Get(FaunaQuery.Var('X'))))
            )
        );
        // @ts-ignore
        return result.data
    } catch (error) {
        console.error('Error getting all documents:', error);
        throw error;
    }
};

// Function to get a single document by ID
export const getDocumentById = async (collectionName: string, id: string) => {
    try {
        return await client.query(
            FaunaQuery.Get(FaunaQuery.Ref(FaunaQuery.Collection(collectionName), id))
        );
    } catch (error) {
        console.error('Error getting document by ID:', error);
        throw error;
    }
};

// Function to save a new document in a collection
export const saveDocument = async (collectionName: string, data: object) => {
    try {
        return await client.query(
            FaunaQuery.Create(
                FaunaQuery.Collection(collectionName),
                {data}
            )
        );
    } catch (error) {
        console.error('Error saving document:', error);
        throw error;
    }
};

// Function to update an existing document by ID
export const updateDocument = async (collectionName: string, id: string, data: object) => {
    try {
        return await client.query(
            FaunaQuery.Update(
                FaunaQuery.Ref(FaunaQuery.Collection(collectionName), id),
                {data}
            )
        );
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
};

export const queryDocumentsByIndex = async (indexName: string,refCollectionName:string ,refId: string) => {

    try {
        const response = await client.query(
            FaunaQuery.Map(
                FaunaQuery.Paginate(FaunaQuery.Match(FaunaQuery.Index(indexName), FaunaQuery.Ref(FaunaQuery.Collection(refCollectionName), refId))),
                FaunaQuery.Lambda('X', FaunaQuery.Get(FaunaQuery.Var('X')))
            )
        );

        // @ts-ignore
        return response.data.map((doc: any) => doc);
    } catch (error) {
        console.error(`Error querying documents by index ${indexName}:`, error);
        throw error;
    }
};


