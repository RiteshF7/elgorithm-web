import React, {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {useFrame} from "@react-three/fiber";

interface CubeStateType {
    motion?: string;
}

const COMPONENT_KEY = 'CUBE';

export const Cube: FC = () => {
    const cubeRef = useRef();
// An array of colors for each face of the cube
    const colors = [
        'red',    // +X (right)
        'green',  // -X (left)
        'blue',   // +Y (top)
        'yellow', // -Y (bottom)
        'orange', // +Z (front)
        'red'  // -Z (back)
    ];
    const [state, setState] = useState<CubeStateType>({
        motion: 'idle'
    });
    const {registerComponent} = usePlayground();

    useFrame(() => {
        const speed = 0.1;
        const rotationSpeed = 0.02;
        switch (state.motion) {
            case 'idle':
                break;
            case 'FORWARD':
                // @ts-ignore
                cubeRef.current.position.x += speed;
                // @ts-ignore
                // cubeRef.current.rotation.y += rotationSpeed;
                setState({motion: 'idle'})
                break;
            case 'backward':
                // @ts-ignore
                cubeRef.current.position.z -= speed;
                break;
            case 'rotate':
                // @ts-ignore
                cubeRef.current.rotation.y += rotationSpeed;
                break;
        }

    })


    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            setState((state) => ({...state, ...data}))
        })


    }, []);

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[3, 3, 3]} />
            {/* Apply different materials for each face */}
            {colors.map((color, index) => (
                <meshStandardMaterial key={index} color={color} />
            ))}
        </mesh>
    );

}
