import {FC, useEffect, useState} from "react";
import {useShContext} from "@/modules/playground/providers/SH.provider";
import {COMPONENT_KEY, Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {AutoRangeInput} from "@/modules/common/components/range-input/RangeInput";

export const LedWrapper: FC = () => {
    const {registerComponent, currentUiState, checkCompletionStatus,initCode} = useShContext();
    const initialState = {...currentUiState.led};
    const [ledState, setState] = useState<LedConfig>(initialState)

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            const isCompleted = checkCompletionStatus(data, () => {
                setState((state) => ({...state, ...initialState}))
                // alert('success')
                console.log('success!')

            }, () => {
                setState((state) => ({...state, ...initialState}))
                // alert('failed')
                console.log('failed!')
            })
            if (!isCompleted) {
                currentUiState.led.active = data.active;
                currentUiState.led.color = data.color;
                setState((state) => ({...state, ...currentUiState.led}))
            }

        })
    }, []);

    return (
        <div className={'flex flex-col items-center '}>
            <Led config={ledState}/>
            {/*<AutoRangeInput min={0} max={100} delay={1000} value={value} onChange={setValue} />*/}
            {/*<p>Value: {value}</p>*/}
        </div>
    )
}