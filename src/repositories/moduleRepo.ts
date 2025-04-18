import {
    getAllDocuments,
    getDocumentById,
    queryDocumentsByIndex,
    saveDocument,
    updateDocument
} from "@/utils/database/faunaQuery";
import {SECTIONS_COLLECTION} from "@/repositories/sectionRepo";

// Define the collection name as a constant
const MODULES_COLLECTION = 'modules';

// Function to fetch all module data
export const fetchAllModules = async () => {
    try {
        return await getAllDocuments(MODULES_COLLECTION);
    } catch (error) {
        console.error('Error fetching all module:', error);
        throw error;
    }
};

// Function to fetch a particular module data by ID
export const fetchModuleById = async (id: string) => {
    try {
        return await getDocumentById(MODULES_COLLECTION, id);
    } catch (error) {
        console.error(`Error fetching module with ID ${id}:`, error);
        throw error;
    }
};

// Function to create a new module
export const createModule = async (data: object) => {
    try {
        return await saveDocument(MODULES_COLLECTION, data);
    } catch (error) {
        console.error('Error creating new module:', error);
        throw error;
    }
};

// Function to update an existing module by ID
export const updateModule = async (id: string, data: object) => {
    try {
        return await updateDocument(MODULES_COLLECTION, id, data);
    } catch (error) {
        console.error(`Error updating module with ID ${id}:`, error);
        throw error;
    }
};

// Function to fetch sections by stage ID
export const fetchModulesBySection = async (sectionId: string) => {
    try {
        return await queryDocumentsByIndex("modules_by_section",SECTIONS_COLLECTION,sectionId);
    } catch (error) {
        console.error(`Error fetching modules for section ID ${sectionId}:`, error);
        throw error;
    }
};
