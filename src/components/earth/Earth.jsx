import * as THREE from 'three'
import { Center, useGLTF } from '@react-three/drei'
import './EarthMaterial'
import './AtmosphereMaterial'




export default function EarthScene({ astronaut = false, ...props }) {




    return (<>

        <group {...props}>
            <Center>
                <Earth scale={1.25} position={[0, 0, 0]} />
            </Center>

        </group>


    </>

    )
}

function Earth({ children, ...props }) {




    // Textures



    const earthParameters = {}
    earthParameters.atmosphereDayColor = '#00aaff'
    earthParameters.atmosphereTwilightColor = '#ff6600'

    return (
        <group {...props} >
            <mesh  >
                <sphereGeometry args={[2, 64, 64]} />
                <earthMaterial />
            </mesh>
            <mesh >
                <sphereGeometry args={[2.07, 64, 64]} />
                <atmosphereMaterial transparent side={THREE.BackSide} />
            </mesh>
        </group>
    )
}

export function Astronaut({ vec = new THREE.Vector3(), children, ...props }) {

    const { nodes, materials } = useGLTF('/astronaut.glb')


    return (

        <mesh {...props} geometry={nodes.Astronaut_mesh.geometry} material={materials.Astronaut_mat} />

    )
}


export function Tesla({ vec = new THREE.Vector3(), children, ...props }) {

    const tesla = useGLTF('/tesla.glb')



    return (

        <primitive object={tesla.scene} {...props} />
    )
}
