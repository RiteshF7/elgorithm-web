import {FC, useEffect, useState} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {setState} from "blockly/core/utils/aria";

interface ServoMotorProps {
    initialPosition: number;
    destinationPosition: number;
}

export enum ServoDirections{
    RIGHT='Right',
    LEFT='Left'
}

export const COMPONENT_KEY='SERVO_MOTOR'
export const ServoMotor: FC<ServoMotorProps> = ({initialPosition, destinationPosition}) => {
    const [angle,setAngle] = useState<number>(0)

    const registerComponent = usePlayground()

    function processResult() {

    }

    function isOnDestination(){

    }

    function turn(direction:ServoDirections) {
        switch (direction) {
            case ServoDirections.RIGHT:
                turnRight()
                break;
            case ServoDirections.LEFT:
                turnLeft()
                break;
        }
    }

    useEffect(() => {
        setAngle(initialPosition)
        registerComponent.registerComponent(COMPONENT_KEY,(data)=>{
            if (data.hasOwnProperty('completed')){
                processResult()
                return;
            }
            turn(data.direction);
        })
    }, []);

    function turnRight(){
        setAngle(angle => (angle + 45) % 360);
    }

    function turnLeft(){
        setAngle(angle => (angle - 45) % 360);
    }


    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={angle} ></wokwi-servo>
        </div>
    )
}