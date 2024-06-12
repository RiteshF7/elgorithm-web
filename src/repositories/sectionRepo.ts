import { getAllDocuments, getDocumentById, saveDocument, updateDocument, queryDocumentsByIndex } from "@/utils/database/faunaQuery";
import {STAGES_COLLECTION} from "@/repositories/stageRepo";

// Define the collection name as a constant
const SECTIONS_COLLECTION = 'sections';

// Function to fetch all sections data
export const fetchAllSections = async () => {
    try {
        return await getAllDocuments(SECTIONS_COLLECTION);
    } catch (error) {
        console.error('Error fetching all sections:', error);
        throw error;
    }
};

// Function to fetch a particular section data by ID
export const fetchSectionById = async (id: string) => {
    try {
        return await getDocumentById(SECTIONS_COLLECTION, id);
    } catch (error) {
        console.error(`Error fetching section with ID ${id}:`, error);
        throw error;
    }
};

// Function to create a new section
export const createSection = async (data: object) => {
    try {
        return await saveDocument(SECTIONS_COLLECTION, data);
    } catch (error) {
        console.error('Error creating new section:', error);
        throw error;
    }
};

// Function to update an existing module by ID
export const updateSection = async (id: string, data: object) => {
    try {
        return await updateDocument(SECTIONS_COLLECTION, id, data);
    } catch (error) {
        console.error(`Error updating section with ID ${id}:`, error);
        throw error;
    }
};

// Function to fetch sections by stage ID
export const fetchSectionsByStage = async (stageId: string) => {
    try {
        return await queryDocumentsByIndex("sections_by_stage",STAGES_COLLECTION,stageId);
    } catch (error) {
        console.error(`Error fetching sections for stage ID ${stageId}:`, error);
        throw error;
    }
};
