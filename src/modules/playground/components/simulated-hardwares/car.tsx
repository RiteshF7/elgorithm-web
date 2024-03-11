// Car.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const Car = () => {
    const carRef = useRef()?? React.createRef();
    const controls = useControls({
        forward: { value: false, label: 'Forward' },
        backward: { value: false, label: 'Backward' },
        left: { value: false, label: 'Left' },
        right: { value: false, label: 'Right' },
    });


    useFrame(() => {
        const speed = 0.1;
        const rotationSpeed = 0.02;
        // @ts-ignore
        if (controls.forward) carRef.current.position.z -= speed;
        // @ts-ignore
        if (controls.backward) carRef.current.position.z += speed;
        // @ts-ignore
        if (controls.left) carRef.current.rotation.y += rotationSpeed;
        // @ts-ignore
        if (controls.right) carRef.current.rotation.y -= rotationSpeed;
    });

    return (
        <mesh ref={carRef}>
            <boxGeometry args={[1, 0.5, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
};

export default Car;
