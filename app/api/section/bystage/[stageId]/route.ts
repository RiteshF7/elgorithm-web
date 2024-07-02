import {NextRequest, NextResponse} from 'next/server';
import {fetchSectionById, fetchSectionsWithModulesByStage, updateSection} from "@/repositories/sectionRepo";
import * as module from "node:module";

export async function GET(req: NextRequest, context: { params: { stageId: string } }) {
    const {stageId} = context.params;
    const sections = await fetchSectionsWithModulesByStage(stageId);
    if (sections) {
        const response  = sections.map((section: any) => {
            // define type here
            //return type here
            // check type here
            // call by ref on database levelg
            return {
                section:section.data.title,
                modules: section.modules.map(
                    (module: any) => {
                        return module.data
                    }
                ),
            }
        })
        return NextResponse.json(response);
    } else {
        return NextResponse.json({error: 'Section not found'}, {status: 404});
    }
}

export async function PUT(req: NextRequest, context: { params: { sectionId: string } }) {
    const {sectionId} = context.params;
    const updatedData = await req.json();
    const updatedSection = await updateSection(sectionId, updatedData);
    if (updatedSection) {
        return NextResponse.json(updatedSection);
    } else {
        return NextResponse.json({error: 'Section not found'}, {status: 404});
    }
}
