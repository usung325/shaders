import { useControls } from 'leva'
import React, {useRef} from 'react'
import { fragment, vertex } from './shader'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'


export default function Model() {

    const plane = useRef();
    const { amplitude, waveLength } = useControls({
        amplitude: { value: 0.25, min: 0, max: 5, stop: 0.05},
        waveLength: { value: 5, min: 0, max: 20, stop: 1}
    })

    const texture = useTexture("/images/im1.png")

    const uniforms = useRef ({
        uTime: {value: 0},
        uAmplitude: { value: amplitude },
        uWaveLength: { value: waveLength},
        uTexture: { value: texture}
    })

    useFrame(() => {
        plane.current.material.uniforms.uWaveLength.value = waveLength;
        plane.current.material.uniforms.uAmplitude.value = amplitude;
        plane.current.material.uniforms.uTime.value += 0.01;
    })
    return (
        <mesh ref={plane}>
            <planeGeometry args={[3, 3 / (1736/1976), 64, 64]}/>

            <shaderMaterial
                vertexShader = {vertex}
                fragmentShader = {fragment}
                wireframe = {false}
                uniforms = {uniforms.current}


            />
        </mesh>
    )
}