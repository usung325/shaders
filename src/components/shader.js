export const vertex = `    
    uniform float uAmplitude;
    uniform float uWaveLength;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
        vec3 newPosition = position;
        float wave = (sin((position.x + uTime) * uWaveLength)) * uAmplitude;
        newPosition.z += wave;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.);
    }
`

export const fragment = `
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
        // Debug: color based on UV coordinates
        // gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);

        // Uncomment to check texture sampling
        vec4 texColor = texture2D(uTexture, vUv);
        gl_FragColor = vec4(texColor.rgb, 1.0);
    }
`