import {FC, useEffect, useState} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {setState} from "blockly/core/utils/aria";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {ComponentLogic} from "@/modules/playground/components/simulated-hardwares/utils/componentLogic";
import SHCUtils from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";
import {toDegrees} from "blockly/core/utils/math";

interface ServoMotorProps {
    initialPosition: Angle;
    destinationPosition: Angle;
}

interface Angle {
    degree: number
}

export enum ServoDirections {
    RIGHT = 'Right',
    LEFT = 'Left'
}

export const COMPONENT_KEY = 'SERVO_MOTOR'
export const ServoMotor: FC<ServoMotorProps> = ({initialPosition, destinationPosition}) => {
    const [angle, setAngle] = useState<Angle>({ degree: 0 });

    const registerComponent = usePlayground()
    const shcUtils = new SHCUtils(COMPONENT_KEY, initialPosition, destinationPosition, handleSuccess, handleFailure)


    useEffect(() => {
        shcUtils.initComponent(handlePayload)
    }, []);


    function handleSuccess() {
        resetComponent()
    }

    function handleFailure() {
        resetComponent()
    }

    function handlePayload(data: any) {
        turn(data.direction);
    }

    function resetComponent() {
        setAngle(initialPosition)
    }



    //process motion
    function turn(direction: ServoDirections) {
        switch (direction) {
            case ServoDirections.RIGHT:
                turnRight()
                break;
            case ServoDirections.LEFT:
                turnLeft()
                break;
        }
    }


    function turnRight() {
        setAngle(prevAngle => {
            const updatedAngle = {degree: (prevAngle.degree + 45) % 360}
            shcUtils.updateState(updatedAngle)
            return {...prevAngle, ...updatedAngle}
        })

    }

    function turnLeft() {
        setAngle(prevAngle => {
            const updatedAngle = {degree: (prevAngle.degree - 45) % 360}
            shcUtils.updateState(updatedAngle)
            return {...prevAngle, ...updatedAngle}        })
    }


    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={angle.degree}></wokwi-servo>
        </div>
    )
}