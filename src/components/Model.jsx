import { useControls } from 'leva'
import React, {useRef} from 'react'
import { fragment, vertex } from './shader'
import { useFrame } from '@react-three/fiber'


export default function Model() {

    const plane = useRef();
    const { amplitude, waveLength } = useControls({
        amplitude: { value: 0, min: 0, max: 5, stop: 0.1},
        waveLength: { value: 0, min: 0, max: 20, stop: 1}
    })



    const uniforms = useRef ({
        uAmplitude: { value: amplitude },
        uWaveLength: { value: waveLength}
    })

    useFrame(() => {
        plane.current.material.uniforms.uWaveLength.value = waveLength;
    })
    return (
        <mesh ref={plane}>
            <planeGeometry args={[3, 3, 15, 15]}/>

            <shaderMaterial
                vertexShader = {vertex}
                fragmentShader = {fragment}
                wireframe = {true}
                uniforms = {uniforms.current}


            />
        </mesh>
    )
}