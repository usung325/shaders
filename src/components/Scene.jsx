import React from 'react'
import {Canvas} from '@react-three/fiber'
import Model from '@/components/Model'

export default function Scene() {
    return (
        <Canvas camera={{fov:50}}>
            <Model />
        </Canvas>
    )
}