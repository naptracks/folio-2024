import * as THREE from 'three'
import { Center, useGLTF } from '@react-three/drei'
import './EarthMaterial'
import './AtmosphereMaterial'
import { forwardRef } from 'react'




export default function EarthScene({ astronaut = false, ...props }) {




    return (<>

        <group {...props}>
            <Center>
                <Earth scale={1} position={[0, 0, 0]} />
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

export const Astronaut = forwardRef((

    { vec = new THREE.Vector3(), children, material, ...props },
    ref,

) => {

    const { nodes, materials } = useGLTF('/astronaut.glb')
    return (

        <mesh ref={ref} {...props} geometry={nodes.Astronaut_mesh.geometry} material={material ? material : materials.Astronaut_mat} />
    )
}
)
