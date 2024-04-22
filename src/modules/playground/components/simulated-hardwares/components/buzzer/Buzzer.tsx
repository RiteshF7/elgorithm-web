import {FC} from "react";

import '@wokwi/elements';


export interface BuzzerState {
    state: boolean;
}

export const Buzzer: FC<BuzzerState> = (state) => {



    return <div className={'flex flex-col p-2'}>
        <wokwi-buzzer hasSignal={state ? true : undefined}></wokwi-buzzer>
    </div>
}
