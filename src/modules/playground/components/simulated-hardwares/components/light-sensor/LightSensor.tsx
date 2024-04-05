import React, {FC, useState} from "react";
import '@wokwi/elements';
import {AutoRangeInput} from "@/modules/common/components/range-input/RangeInput";

interface LightSensorProps{
    onChange: (value: number) => void;
}

export const LightSensor:FC<LightSensorProps> = ({onChange})=>{
    const [sliderValue, setSliderValue] = useState<number>(0);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setSliderValue(value);
    };

    return(
        <div className={'flex flex-col m-6 p-2 space-y-4'}>
            <wokwi-photoresistor-sensor/>
            <input
                type="range"
                min="0"
                max="80"
                step="1"
                value={sliderValue}
                onChange={handleSliderChange}
                className="slider-thumb appearance-none bg-red-500 h-3 rounded-full w-full"
            />
            {/*<AutoRangeInput min={0} max={80} value={0} onChange={onChange}/>*/}
        </div>
    )
}

