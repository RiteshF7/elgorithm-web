import { getAllDocuments, getDocumentById, saveDocument } from "@/utils/database/faunaQuery";

// Define the collection name as a constant
const SECTIONS_COLLECTION = 'sections';

// Function to fetch all sections data
export const fetchAllSections = async () => {
    try {
        const sections = await getAllDocuments(SECTIONS_COLLECTION);
        return sections;
    } catch (error) {
        console.error('Error fetching all sections:', error);
        throw error;
    }
};

// Function to fetch a particular section data by ID
export const fetchSectionById = async (id: string) => {
    try {
        const section = await getDocumentById(SECTIONS_COLLECTION, id);
        return section;
    } catch (error) {
        console.error(`Error fetching section with ID ${id}:`, error);
        throw error;
    }
};

// Function to create a new section
export const createSection = async (data: object) => {
    try {
        const section = await saveDocument(SECTIONS_COLLECTION, data);
        return section;
    } catch (error) {
        console.error('Error creating new section:', error);
        throw error;
    }
};
