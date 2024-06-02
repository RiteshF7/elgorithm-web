import { NextRequest, NextResponse } from 'next/server';
import {createModule, fetchAllModules} from "@/repositories/moduleRepo";


export async function GET(req: NextRequest) {
    const modules = await fetchAllModules();
    return NextResponse.json(modules);
}

export async function POST(req: NextRequest) {
    const newModule = await req.json();
    const createdModule = await createModule(newModule);
    return NextResponse.json(createdModule, { status: 201 });
}
