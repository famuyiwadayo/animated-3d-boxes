import * as THREE from 'three'
import React, { useState, useRef, useEffect, FC } from 'react';
import { Vector3 } from 'react-three-fiber'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

type Props = {position: Vector3}

export const Box: FC<Props> = ({ position }) => {
    
    const [active, setActive] = useState(0);

    const {spring} = useSpring({
        spring: active,
        config: {
            mass: 5,
            tension: 400,
            friction: 50,
            precision: 0.0001
        }
    });

    const scale = spring.to([0, 1], [1, 2]);
    const rotation = spring.to([0, 1], [0, Math.PI]);
    const color = spring.to([0, 1], ['#50c878', '#e45858']);

    useEffect(() => {
        let timeout: any;
        const toggleActive = (val: number) => {
            timeout = setTimeout(() => {
                setActive(Number(!active));
                toggleActive(val)
            }, Math.random() * 2000 + 1000)
        }

        toggleActive(active)

        return () => {
            clearTimeout(timeout)
        }
    }, [active])


    return (
        <a.mesh
            rotation-y={rotation}
            scale-x={scale}
            scale-y={scale}
            scale-z={scale}
            position={position}
            castShadow
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshStandardMaterial roughness={0.5} attach="material" color={color} />
        </a.mesh>
    )
}