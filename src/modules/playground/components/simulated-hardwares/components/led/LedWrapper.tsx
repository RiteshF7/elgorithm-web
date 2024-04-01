import {FC, useEffect, useState} from "react";
import {useShContext} from "@/modules/playground/providers/SH.provider";
import {COMPONENT_KEY, Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {AutoRangeInput} from "@/modules/common/components/range-input/RangeInput";

export const LedWrapper: FC = () => {
    const {registerComponent, currentState, checkCompletionStatus,initCode} = useShContext();
    const initialState = {...currentState.led};
    const [ledState, setState] = useState<LedConfig>(initialState)
    const [value, setValue] = useState(0);

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            if(initCode(data)){

                return;
            }
            const isCompleted = checkCompletionStatus(data, () => {
                setState((state) => ({...state, ...initialState}))
                alert('success')

            }, () => {
                setState((state) => ({...state, ...initialState}))
                alert('failed')
            })
            if (!isCompleted) {
                currentState.led.active = data.active;
                currentState.led.color = data.color;
                setState((state) => ({...state, ...currentState.led}))

            }

        })
    }, []);

    return (
        <div className={'flex flex-col items-center '}>
            <Led config={ledState}/>
            <AutoRangeInput min={0} max={100} delay={1000} value={value} onChange={setValue} />
            <p>Value: {value}</p>
        </div>
    )
}