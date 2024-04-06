import {FC, useEffect, useState} from "react";
import {Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {Button} from "@/modules/common/components/button/Button";
import _ from 'lodash'

export const Test: FC = () => {

    /*problem statement
    if >50 turn of led
    if <50 turn on led
    */

    const [ledState, setLedState] = useState<LedConfig>({active:false,color:'red'})

    const testCases = [
        {input:55,output:{active:false,color:'red'}},
        {input:40,output:{active:true,color:'red'}},
    ]

    const codePrefix = `
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\n
    const executeTimeouts = async () => {\n`

    const codePostfix = ` };\nreturn executeTimeouts();`


    const blockCode =  `

     if(input>50){
            await delay(1000);
            setLedState({ active: false, color: 'red' });
            return { active: false, color: 'red' }
        }

        if(input<50){
            await delay(1000);
            setLedState({ active: true, color: 'red' });
            return { active: true, color: 'red' }
        }
    `
    const executableCode = codePrefix+blockCode+codePostfix

    async function onClick() {
        const func = new Function('setLedState', 'input', executableCode)
        for (const testCase of testCases) {
            const actualOutput = await func(setLedState, testCase.input)
            console.log(actualOutput)
            if (_.isEqual(actualOutput, testCase.output)) {
                console.log('test case passed!')
            } else {
                console.log('test case failed!')
            }
        }

    }

    return(
        <div className={'flex flex-col p-3 items-center'}>
        <Led config={ledState}/>
        <Button onClick={onClick} uiType={'primary'}/>
        </div>

)
}
