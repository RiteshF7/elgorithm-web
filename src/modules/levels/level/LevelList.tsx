import {FC} from "react";
import clsx from "clsx";
import {Level, LevelProps} from "@/modules/levels/level/Level";

interface LevelListProps {
    levels: LevelProps[];
}

export const LevelsList: FC<LevelListProps> = ({levels}) => {
    return (
        <div className={clsx('flex flex-col gap-10')}>
            {
                levels.map((level, index) => {
                    return (
                        <div key={index}>
                            <Level {...level}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
