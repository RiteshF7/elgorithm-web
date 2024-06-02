import {NextRequest, NextResponse} from 'next/server';
import {createSection, fetchAllSections} from "@/repositories/sectionRepo";


export async function GET() {
    const sections = await fetchAllSections();
    return NextResponse.json(sections);
}

export async function POST(req: NextRequest) {
    const newModule = await req.json();
    const createdModule = await createSection(newModule);
    return NextResponse.json(createdModule, { status: 201 });
}