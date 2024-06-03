import { NextRequest, NextResponse } from 'next/server';
import {fetchPlaygroundById, updatePlayground} from "@/repositories/playgroundRepo";

export async function GET(req: NextRequest, context: { params: { stageId: string } }) {
    const { stageId } = context.params;
    const stage = await fetchPlaygroundById(stageId);
    if (stage) {
        return NextResponse.json(stage);
    } else {
        return NextResponse.json({ error: 'playground not found' }, { status: 404 });
    }
}

export async function PUT(req: NextRequest, context: { params: { stageId: string } }) {
    const { stageId } = context.params;
    const updatedData = await req.json();
    const updatedStage = await updatePlayground(stageId, updatedData);
    if (updatedStage) {
        return NextResponse.json(updatedStage);
    } else {
        return NextResponse.json({ error: 'Playground not found' }, { status: 404 });
    }
}
