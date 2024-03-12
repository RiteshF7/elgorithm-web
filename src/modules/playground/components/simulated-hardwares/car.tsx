// Car.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const Car = () => {
    const carRef = useRef()?? React.createRef();


    useFrame(() => {
        const speed = 0.1;
        const rotationSpeed = 0.02;
        // @ts-ignore
        carRef.current.position.z -= speed;
        // @ts-ignore
         carRef.current.position.z += speed;
        // @ts-ignore
         carRef.current.rotation.y += rotationSpeed;
        // @ts-ignore
         carRef.current.rotation.y -= rotationSpeed;
    });

    return (
        <mesh ref={carRef}>
            <boxGeometry args={[1, 0.5, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
};

export default Car;
