import { NextRequest, NextResponse } from 'next/server';
import {createPlayground, fetchAllPlaygrounds} from "@/repositories/playgroundRepo";

export async function GET() {
    const stages =await fetchAllPlaygrounds();
    return NextResponse.json(stages);
}

export async function POST(req: NextRequest) {
    const newStage =await req.json();
    const createdStage = await createPlayground(newStage);
    return NextResponse.json(createdStage, { status: 201 });
}
