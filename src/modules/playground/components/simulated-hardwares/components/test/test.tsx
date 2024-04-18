import {FC, useEffect, useState} from "react";
import {Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {Button} from "@/modules/common/components/button/Button";
import _ from 'lodash'

export const Test: FC = () => {

    /*problem statement
    if >50 turn of led
    if <50 turn on led

        every module will have its own state
        then it will be able to handle multiple components
        state may include component key as base value

        //make a Neopixel matrix component

    */



    const [ledState, setLedState] = useState<LedConfig>({active: false, color: 'red'})

    //add error message
    const testCases = [
        {initialState: 55, output: {active: false, color: 'red'}},
        {initialState: 40, output: {active: true, color: 'red'}},
    ]

    const codePrefix = `
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\n
    
    const changeLedState = async (state)=>{
        await delay(1000);
        setLedState(state);
        return state
    }
    
    const executeTimeouts = async () => {\n`

    const codePostfix = ` };\nreturn executeTimeouts();`


    const blockCode= `

     if(input>50){
            return await changeLedState({ active: false, color: 'red' });
        }

        if(input<50){
            return await changeLedState({ active: true, color: 'red' });
        }
    `
    const executableCode = codePrefix + blockCode + codePostfix


    // @ts-ignore
    const changeLedState = async (delay: (ms) => Promise<unknown>, state: any) => {
        await delay(1000);
        setLedState(state);
        return state
    }




    async function onClick() {
        // const func = new Function('setLedState', 'input', executableCode)
        // for (const testCase of testCases) {
        //     const actualOutput = await func(setLedState, testCase.input)
        //     console.log(actualOutput)
        //     if (_.isEqual(actualOutput, testCase.output)) {
        //         //sendSuccessCallback()
        //         console.log('test case passed!')
        //     } else {
        //         //sendFailureCallback with testcase error message
        //         console.log('test case failed!')
        //     }
        // }

    }

    return (
        <div className={'flex flex-col p-3 items-center'}>
            <Led config={ledState}/>
            <Button onClick={onClick} uiType={'primary'}/>
        </div>

    )
}
