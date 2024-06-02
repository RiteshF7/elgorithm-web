import { NextRequest, NextResponse } from 'next/server';
import {fetchSectionById, updateSection} from "@/repositories/sectionRepo";

export async function GET(req: NextRequest, context: { params: { sectionId: string } }) {
    const { sectionId } = context.params;
    const section =await  fetchSectionById(sectionId);
    if (section) {
        return NextResponse.json(section);
    } else {
        return NextResponse.json({ error: 'Section not found' }, { status: 404 });
    }
}

export async function PUT(req: NextRequest, context: { params: { sectionId: string } }) {
    const { sectionId } = context.params;
    const updatedData = await req.json();
    const updatedSection = await updateSection(sectionId, updatedData);
    if (updatedSection) {
        return NextResponse.json(updatedSection);
    } else {
        return NextResponse.json({ error: 'Section not found' }, { status: 404 });
    }
}
