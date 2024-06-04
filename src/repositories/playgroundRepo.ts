// Define the collection name as a constant
import {getAllDocuments, getDocumentById, saveDocument, updateDocument} from "@/utils/database/faunaQuery";

const PLAYGROUND_COLLECTION = 'playgrounds';

// Function to fetch all playgrounds data
export const fetchAllPlaygrounds = async () => {
    try {
        return await getAllDocuments(PLAYGROUND_COLLECTION);
    } catch (error) {
        console.error('Error fetching all playgrounds:', error);
        throw error;
    }
};

// Function to fetch a particular playground data by ID
export const fetchPlaygroundById = async (id: string) => {
    try {
        return await getDocumentById(PLAYGROUND_COLLECTION, id);
    } catch (error) {
        console.error(`Error fetching playground with ID ${id}:`, error);
        throw error;
    }
};

// Function to create a new playground
export const createPlayground = async (data: object) => {
    try {
        return await saveDocument(PLAYGROUND_COLLECTION, data);
    } catch (error) {
        console.error('Error creating new playground:', error);
        throw error;
    }
};

// Function to update an existing playgroundS by ID
export const updatePlayground = async (id: string, data: object) => {
    try {
        return await updateDocument(PLAYGROUND_COLLECTION, id, data);
    } catch (error) {
        console.error(`Error updating playgrounds with ID ${id}:`, error);
        throw error;
    }
};
