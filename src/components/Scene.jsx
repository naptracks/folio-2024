import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float, } from '@react-three/drei'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'


import { Astronaut } from './earth/Earth'


export default function Scene(props) {

    const iss = useGLTF('/iss.glb')


    return (
        <group    {...props}>
            <Physics gravity={[0, 0, 0]}>
                <Pointer />
                <Float floatIntensity={.5}>
                    <Connector position={[2, 0, 7]}>
                        <Astronaut scale={.8} />
                    </Connector>
                    <Connector position={[1.5, 0, 7]}>
                        <Astronaut scale={.8} />
                    </Connector>
                </Float>
                <Float floatingRange={[.5, 2]} speed={.2} floatIntensity={2} rotationIntensity={3}>
                    <group rotation={[Math.PI * .35, 0, 0]} position={[10, -1, -25]}>
                        <primitive object={iss.scene} scale={.3} />
                    </group>
                </Float>
            </Physics>
        </group>
    )
}

function Connector({ defaultModel, position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, accent, ...props }) {
    const api = useRef()
    const pos = useMemo(() => position || [r(10), r(10), r(10)], [])

    useFrame((state, delta) => {
        delta = Math.min(.1, delta)
        api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(.2))
    })
    return (
        <RigidBody {...props} linearDamping={2} angularDamping={2} friction={1} position={pos} ref={api}  >
            {children}
            {accent && <pointLight intensity={4} distance={2.5} color={props.color} />}
        </RigidBody>
    )
}

function Pointer({ vec = new THREE.Vector3() }) {
    const ref = useRef()
    useFrame(({ pointer, viewport }) => {
        ref.current?.setNextKinematicTranslation(vec.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0))
    })
    return (
        <RigidBody position={[0, 0, 5.5]} type="kinematicPosition" colliders={false} ref={ref}>
            <BallCollider args={[1]} />
        </RigidBody>
    )
}





