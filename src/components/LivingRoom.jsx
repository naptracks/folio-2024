import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { SoftShadows, useGLTF} from "@react-three/drei"


import { easing } from "maath"


function Light() {
    const ref = useRef()
    useFrame((state, delta) => {
        easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 0.2, delta)
    })
    return (
        <group ref={ref}>
            <directionalLight position={[5, 5, -8]} castShadow intensity={5} shadow-mapSize={2048} shadow-bias={-0.001}>
                <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
            </directionalLight>
        </group>
    )
}

export default function LivingRoom(props) {


    return (
        <group {...props}>
            <SoftShadows size={35} focus={.5} samples={8} />
            {/* <fog attach="fog" args={["#d0d0d0", 8, 35]} /> */}
            {/* <ambientLight intensity={4} /> */}
            <Light />
            <Room scale={0.5} position={[-.25, -1, 0]} />
        </group>
    )
}


export function Room(props) {
    const { nodes, materials } = useGLTF("/room-transformed.glb")
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                {/* <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.Material} /> */}
                {/* <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials["Material.002"]} /> */}
                {/* <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials["Material.003"]} /> */}
                <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.krzeslo_1} />
                {/* <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.krzeslo_okno} /> */}
                <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.krzeslo_prawe} />
                <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.krzeslo_srodek} />
                <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.podloga} />
                {/* <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.sciana_okno} /> */}
                <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials["stolik.001"]} />
                {/* <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials["Material.006"]} /> */}
                <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials["Material.004"]} />
                {/* <mesh geometry={nodes.Object_13.geometry}>
                    <meshStandardMaterial transparent opacity={0.5} />
                </mesh> */}
                {/* <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials["Material.002"]} /> */}
                <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials["Material.005"]} />
                <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.mata} />
                <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.stolik} />
            </group>
        </group>
    )
}

useGLTF.preload("/room-transformed.glb")

