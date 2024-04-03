import {FC, useEffect, useState} from "react";
import {useShContext} from "@/modules/playground/providers/SH.provider";
import {COMPONENT_KEY, Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {AutoRangeInput} from "@/modules/common/components/range-input/RangeInput";

export const LedWrapper: FC = () => {
    const {registerComponent,initialUiState, updateUiState,checkCompletionStatus} = useShContext();
    const ledInitialState = {...initialUiState.LED};
    const ledUiState = {...ledInitialState}
    const [ledState, setState] = useState<LedConfig>(ledInitialState)

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            const isCompleted = checkCompletionStatus(data, () => {
                setState((state) => ({...state, ...ledInitialState}))
                // alert('success')
                console.log('success!')

            }, () => {
                setState((state) => ({...state, ...ledInitialState}))
                // alert('failed')
                console.log('failed!')
            })
            if (!isCompleted) {
                //check if possible in neopixel
                // ledUiState.active = data.active;
                // ledUiState.color = data.color;
                updateUiState(COMPONENT_KEY,data)
                setState((state) => ({...state, ...data}))
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