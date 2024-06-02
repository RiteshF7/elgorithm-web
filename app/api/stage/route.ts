import { NextRequest, NextResponse } from 'next/server';
import {createStage, fetchAllStages} from "@/repositories/stageRepo";

export async function GET() {
    const stages =await fetchAllStages();
    return NextResponse.json(stages);
}

export async function POST(req: NextRequest) {
    const newStage =await req.json();
    const createdStage = await createStage(newStage);
    return NextResponse.json(createdStage, { status: 201 });
}
