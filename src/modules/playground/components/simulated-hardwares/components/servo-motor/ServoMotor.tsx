import {FC, useEffect, useState} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {setState} from "blockly/core/utils/aria";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";

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


   //process motion
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

    function turnRight(){
        setAngle(angle => (angle + 45) % 360);
    }

    function turnLeft(){
        setAngle(angle => (angle - 45) % 360);
    }


    //result Processing
    function processResult() {
        if (isOnDestination) {
            processSuccess();
        } else {
            processFailure('not on destination!');
        }
    }

    function processSuccess() {
        resetMessageQueue()
        displayMessage('Completed!');
        resetComponent()
    }

    function processFailure(reason: string) {
        resetMessageQueue();
        displayMessage("something went wrong! " + reason);
        resetComponent()
    }

    function displayMessage(message: String) {
        alert(message);
    }


    const isOnDestination  = initialPosition === destinationPosition

    function resetComponent(){
        setAngle(0)
    }




    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={angle} ></wokwi-servo>
        </div>
    )
}