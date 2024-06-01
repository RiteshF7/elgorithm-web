import {createSection, fetchAllSections, fetchSectionById} from '@/repositories/sectionRepo';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return handleGet(req, res);
        case 'POST':
            return handlePost(req, res);
        default:
            res.status(405).json({ error: 'Method Not Allowed' });
    }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.id) {
        // Get section by ID
        const { id } = req.query;
        try {
            const section = await fetchSectionById(id as string);
            res.status(200).json(section);
        } catch (error) {
            res.status(500).json({ error: `Error fetching section with ID ${id}` });
        }
    } else {
        // Get all sections
        try {
            const sections = await fetchAllSections();
            res.status(200).json(sections);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching all sections' });
        }
    }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    // Create a new section
    try {
        const { name, description } = req.body;
        const newSection = await createSection({ name, description });
        res.status(201).json(newSection);
    } catch (error) {
        res.status(500).json({ error: 'Error creating new section' });
    }
}
