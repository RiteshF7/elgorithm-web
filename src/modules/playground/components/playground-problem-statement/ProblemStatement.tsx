import {FC} from "react";
import clsx from "clsx";

export interface ProblemStatementProps {
    problem: string;
    description: string;
}

export const ProblemStatement: FC<ProblemStatementProps> = ({problem, description})=>{
    return (
        <div className={clsx('flex flex-col gap-4 flex-grow text-center items-center' )}>
            <h3 className={'h3'}>
                {problem}
            </h3>
            <p className={'text-content-light text-lg max-w-2xl'}>
                {description}
            </p>
        </div>
    );
}