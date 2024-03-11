import React, {FC, useState} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {Button} from "@/modules/common/components/button/Button";

export const Cube:FC = ()=>{

    return(
        <div>
            <Canvas>

                <ambientLight intensity={0.1} />
                <Button  uiType={'primary'} onClick={()=>{

                }}/>
                <directionalLight color="red" position={[0, 0, 5]} />
                <Anim/>

            </Canvas>
        </div>
    )
}

const Anim:FC = ()=>{
    const [cubePos,setCubePos] = useState(0)
    const cubeMesh = React.useRef()
    useFrame(({ clock }) => {
        console.log(cubePos)
        // @ts-ignore
        cubeMesh.current.position.set(cubePos,0,0)

    })
    return (
        <mesh ref={cubeMesh}>
            <boxGeometry/>
            <meshBasicMaterial color="red"/>
        </mesh>
    )
}