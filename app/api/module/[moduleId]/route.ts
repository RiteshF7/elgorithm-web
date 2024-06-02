import { NextRequest, NextResponse } from 'next/server';
import {fetchModuleById, updateModule} from "@/repositories/moduleRepo";

export async function GET(req: NextRequest, context: { params: { moduleId: string } }) {
    const { moduleId } = context.params;
    const mModule = await fetchModuleById(moduleId);
    if (mModule) {
        return NextResponse.json(mModule);
    } else {
        return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }
}

export async function PUT(req: NextRequest, context: { params: { moduleId: string } }) {
    const { moduleId } = context.params;
    const updatedData = await req.json();
    const updatedModule = await updateModule(moduleId, updatedData);
    if (updatedModule) {
        return NextResponse.json(updatedModule);
    } else {
        return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }
}
