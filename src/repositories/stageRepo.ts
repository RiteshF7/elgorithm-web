// Define the collection name as a constant
import {getAllDocuments, getDocumentById, saveDocument, updateDocument} from "@/utils/database/faunaQuery";

export const STAGES_COLLECTION = 'stages';

// Function to fetch all stages data
export const fetchAllStages = async () => {
    try {
        return await getAllDocuments(STAGES_COLLECTION);
    } catch (error) {
        console.error('Error fetching all stages:', error);
        throw error;
    }
};

// Function to fetch a particular stage data by ID
export const fetchStageById = async (id: string) => {
    try {
        return await getDocumentById(STAGES_COLLECTION, id);
    } catch (error) {
        console.error(`Error fetching stage with ID ${id}:`, error);
        throw error;
    }
};

// Function to create a new stage
export const createStage = async (data: object) => {
    try {
        return await saveDocument(STAGES_COLLECTION, data);
    } catch (error) {
        console.error('Error creating new stage:', error);
        throw error;
    }
};

// Function to update an existing STAGES by ID
export const updateStage = async (id: string, data: object) => {
    try {
        return await updateDocument(STAGES_COLLECTION, id, data);
    } catch (error) {
        console.error(`Error updating stages with ID ${id}:`, error);
        throw error;
    }
};
