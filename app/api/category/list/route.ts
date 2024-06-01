import {NextRequest} from "next/server";
import {getLevelList} from "@/repositories/fauna-db";

export const GET = async (req: NextRequest) => {
    const detailed = req.nextUrl.searchParams.get("detailed");
    if (detailed === "true" || detailed === "1") {
        const levelList  =await getLevelList()
        return new Response(JSON.stringify(levelList));
    }
    // return Response.json(
    //     getLevelList().map(({title, level}) => ({
    //         title,
    //         level,
    //     }))
    // );
};
