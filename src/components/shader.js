export const vertex =`    
    uniform float uAmplitude;
    uniform float uWaveLength;


    void main() {
        vec3 newPosition = position;
        float wave = sin(position.x * uWaveLength);
        newPosition.z += wave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.);
    }
`

export const fragment = `
    void main() {
        gl_FragColor = vec4(1., 0., 0., 1.);
    }
`