import { NextRequest, NextResponse } from 'next/server';
import {fetchStageById, updateStage} from "@/repositories/stageRepo";

export async function GET(req: NextRequest, context: { params: { stageId: string } }) {
    const { stageId } = context.params;
    const stage = await fetchStageById(stageId);
    if (stage) {
        return NextResponse.json(stage);
    } else {
        return NextResponse.json({ error: 'Stage not found' }, { status: 404 });
    }
}

export async function PUT(req: NextRequest, context: { params: { stageId: string } }) {
    const { stageId } = context.params;
    const updatedData = await req.json();
    const updatedStage = await updateStage(stageId, updatedData);
    if (updatedStage) {
        return NextResponse.json(updatedStage);
    } else {
        return NextResponse.json({ error: 'Stage not found' }, { status: 404 });
    }
}
