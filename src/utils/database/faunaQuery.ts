import faunadb from 'faunadb';
import FaunaQuery from './faunaUtils';

const client = new faunadb.Client({ secret: 'fnAFiVRwkAAAQPj1uOMiKCxwQXM3HhxYudOoew-T' });

// Function to get all documents from a collection
export const getAllDocuments = async (collectionName: string) => {
    try {
        const result = await client.query(
            FaunaQuery.Map(
                FaunaQuery.Paginate(FaunaQuery.Documents(FaunaQuery.Collection(collectionName))),
                FaunaQuery.Lambda(x => FaunaQuery.Get(x))
            )
        );
        return result;
    } catch (error) {
        console.error('Error getting all documents:', error);
        throw error;
    }
};

// Function to get a single document by ID
export const getDocumentById = async (collectionName: string, id: string) => {
    try {
        const result = await client.query(
            FaunaQuery.Get(FaunaQuery.Ref(FaunaQuery.Collection(collectionName), id))
        );
        return result;
    } catch (error) {
        console.error('Error getting document by ID:', error);
        throw error;
    }
};

// Function to save a new document in a collection
export const saveDocument = async (collectionName: string, data: object) => {
    try {
        const result = await client.query(
            FaunaQuery.Create(
                FaunaQuery.Collection(collectionName),
                { data }
            )
        );
        return result;
    } catch (error) {
        console.error('Error saving document:', error);
        throw error;
    }
};

// Function to update an existing document by ID
export const updateDocument = async (collectionName: string, id: string, data: object) => {
    try {
        const result = await client.query(
            FaunaQuery.Update(
                FaunaQuery.Ref(FaunaQuery.Collection(collectionName), id),
                { data }
            )
        );
        return result;
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
};


