import React, {FC, useEffect, useRef, useState} from "react";

interface CubeStateType {
    left: number;
    right: number;
    forward: number;
    backward: number;
}

export const Cube: FC = () => {
    const cubeRef = useRef();

    const [state, setState] = useState<CubeStateType>({
        left: 0,
        right: 0,
        forward: 0,
        backward: 0,
    });

    useEffect(() => {
        const speed = 0.1;
        const rotationSpeed = 0.02;
         // @ts-ignore
        cubeRef.current.position.z -= speed;
        // @ts-ignore
         cubeRef.current.position.z += speed;
        // @ts-ignore
        cubeRef.current.rotation.y += rotationSpeed;
        // @ts-ignore
        cubeRef.current.rotation.y -= rotationSpeed;
    }, []);

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );

}
