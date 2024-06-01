
// Define the collection name as a constant
import {getAllDocuments, getDocumentById, saveDocument} from "@/utils/database/faunaQuery";

const STAGES_COLLECTION = 'stage';

// Function to fetch all stages data
export const fetchAllStages = async () => {
    try {
        const stages = await getAllDocuments(STAGES_COLLECTION);
        return stages;
    } catch (error) {
        console.error('Error fetching all stages:', error);
        throw error;
    }
};

// Function to fetch a particular stage data by ID
export const fetchStageById = async (id: string) => {
    try {
        const stage = await getDocumentById(STAGES_COLLECTION, id);
        return stage;
    } catch (error) {
        console.error(`Error fetching stage with ID ${id}:`, error);
        throw error;
    }
};

// Function to create a new stage
export const createStage = async (data: object) => {
    try {
        const stage = await saveDocument(STAGES_COLLECTION, data);
        return stage;
    } catch (error) {
        console.error('Error creating new stage:', error);
        throw error;
    }
};
