import {NextRequest} from "next/server";
import {getLevelList} from "@/repositories/fauna-db";
import {Level} from "@/repositories/models";

export const GET = async (req: NextRequest) => {
    const detailed = req.nextUrl.searchParams.get("detailed");
    if (detailed === "true" || detailed === "1") {
        const levelList = await getLevelList<Level>();
        return new Response(JSON.stringify(levelList));
    }
    const levelList = await getLevelList<Level>();
    return Response.json(
        levelList.map(({title, id, description}) => ({
            name: title,
            id: id,
            description: description
        }))
    );
};
