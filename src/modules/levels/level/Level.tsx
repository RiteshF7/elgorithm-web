import {FC} from "react";


export interface LevelProps {
    level: string;
    levelHeader: string;
    levelDescription: string;
}

export const Level: FC<LevelProps> = ({
                                          level,
                                          levelHeader,
                                          levelDescription
                                      }) => {
    return (<div className={'flex flex-col  items-center'}>
        <div
            className="bg-white rounded-lg shadow-lg    p-4 flex flex-col justify-center items-center">

            <p className="text-xs text-red-500 ">{level}</p>


            <p className={'text-xl font-medium pt-4 '}>{levelHeader}</p>

            <p className={'text-sm font-light'}>{levelDescription}</p>
        </div>

    </div>)
}