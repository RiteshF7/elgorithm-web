import {FC, useEffect, useState} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {setState} from "blockly/core/utils/aria";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {ComponentLogic} from "@/modules/playground/components/simulated-hardwares/utils/componentLogic";

interface ServoMotorProps {
    initialPosition: number;
    destinationPosition: number;
}

export enum ServoDirections {
    RIGHT = 'Right',
    LEFT = 'Left'
}

export const COMPONENT_KEY = 'SERVO_MOTOR'
export const ServoMotor: FC<ServoMotorProps> = ({initialPosition, destinationPosition}) => {
    const [angle, setAngle] = useState<number>(0)

    const registerComponent = usePlayground()


    useEffect(() => {
        componentLogic.initComponent()
        componentLogic.registerComponent()
    }, []);


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
        setAngle(angle => (angle + 45) % 360);
    }

    function turnLeft() {
        setAngle(angle => (angle - 45) % 360);
    }


    const componentLogic: ComponentLogic = {
        initComponent: () => {
            resetMessageQueue()
            setAngle(initialPosition)
        },
        registerComponent: () => {
            registerComponent.registerComponent(COMPONENT_KEY, (data) => {
                if (data.hasOwnProperty('completed')) {
                    componentLogic.processResult()
                    return;
                }
                turn(data.direction);
            })
        },
        resetComponent: () => {
            setAngle(initialPosition)
        },
        processResult: () => {
            if (componentLogic.isOnDestination) {
                componentLogic.processSuccess();
            } else {
                componentLogic.processFailure('not on destination!');
            }
        },
        isOnDestination : angle === destinationPosition,
        processSuccess: () => {
            resetMessageQueue()
            componentLogic.displaySuccessMessage('Completed!');
            componentLogic.resetComponent()
        },
        processFailure: () => {
            resetMessageQueue()
            componentLogic.displayFailureMessage('Failed!');
            componentLogic.resetComponent()
        },
        displayFailureMessage: (message: string) => {
            alert(message)
        },
        displaySuccessMessage: (message: string) => {
            alert(message)
        },
        isCodeCompleted: (data: any) => {
            return data.hasOwnProperty("completed");
        },
    };


    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={angle}></wokwi-servo>
        </div>
    )
}