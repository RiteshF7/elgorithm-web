import {createStage, fetchAllStages, fetchStageById} from '@/repositories/stageRepo';
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
        // Get stage by ID
        const { id } = req.query;
        try {
            const stage = await fetchStageById(id as string);
            res.status(200).json(stage);
        } catch (error) {
            res.status(500).json({ error: `Error fetching stage with ID ${id}` });
        }
    } else {
        // Get all stages
        try {
            const stages = await fetchAllStages();
            res.status(200).json(stages);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching all stages' });
        }
    }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    // Create a new stage
    try {
        const { name, description } = req.body;
        const newStage = await createStage({ name, description });
        res.status(201).json(newStage);
    } catch (error) {
        res.status(500).json({ error: 'Error creating new stage' });
    }
}
