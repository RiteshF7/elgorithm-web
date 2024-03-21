import {FC} from "react";

interface ServoMotorProps {
    initialPosition: number;
    destinationPosition: number;
}

export const ServoMotor: FC<ServoMotorProps> = ({initialPosition, destinationPosition}) => {
    return (
        <wokwi-servo horn="double" angle={12}></wokwi-servo>
    )
}