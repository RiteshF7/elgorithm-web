import {FC, useEffect} from "react";

import '@wokwi/elements';


export interface BuzzerState {
    buzz: boolean;
}

export const Buzzer: FC<BuzzerState> = ({buzz}) => {

    useEffect(() => {
        console.log(buzz,'use')
    }, [buzz]);

    return <div className={'flex flex-col p-2'}>
        <wokwi-buzzer hasSignal={buzz?true:undefined}></wokwi-buzzer>
    </div>
}
