import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'
import { useCursor, Image, Text } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'





const GOLDENRATIO = 1.61803398875

const x = 1.15


const images = [
    //front
    // {
    //     position: [0, 0, 0], rotation: [0, 0, 0], name: 'projet1', bg: '#e4cdac', inside: () => <Gltf src="pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} />
    // },
    //back
    {
        position: [-0.8 * x, 0, -0.6 * x], rotation: [0, 0, 0], name: 'projet2', url: '/projects/digital-hippo.png',
        info: {
            title: 'Hippo Commerce',
            link: '',
            github: '',
            technos: 'NextJS, NodeJS, Tailwindcss, PayloadCMS, tRPC, MongoDB'
        }
    },
    {
        position: [0.8 * x, 0, -0.6 * x], rotation: [0, 0, 0], name: 'projet3', url: '/projects/marc-bourreau.png',
        info: {
            title: 'Marc Bourreau',
            link: 'https://marc-bourreau.web.app/',
            github: '',
            technos: 'ReactJS, NodeJS, Firebase'
        }
    },
    //left
    {
        position: [-1.75 * x, 0, 0.25 * x], rotation: [0, Math.PI / 2.5, 0], name: 'projet4', url: '/projects/superpowerpdf.png',
        info: {
            title: 'SupperPowerPDF',
            link: '',
            github: '',
            technos: 'NextJS, NodeJS, TS, Tailwindcss, OpenAI, Pinecone, tRPC, Prisma, ReactQuery'
        }
    },
    {
        position: [-2.15 * x, 0, 1.5 * x], rotation: [0, Math.PI / 2.5, 0], name: 'projet5', url: '/projects/le-comptoir-des-roses.png',
        info: {
            title: 'Le Comptoiir des Roses',
            link: '',
            github: '',
            technos: 'ReactJS, NodeJS, Firebase, TypeScript'
        }
    },
    // { position: [-2 * x, 0, 2.75 * x], rotation: [0, Math.PI / 2.5, 0], name: 'projet6', bg: '#d1d1ca', inside: () => <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" /> },
    //right
    {
        position: [1.75 * x, 0, 0.25 * x], rotation: [0, -Math.PI / 2.5, 0], name: 'projet7', url: '/projects/awaken.png',
        info: {
            title: 'Awaken',
            link: 'https://awaken.io',
            github: '',
            technos: 'NextJS, NodeJS, Wordpress CMS, AWS'
        }
    },
    {
        position: [2.15 * x, 0, 1.5 * x], rotation: [0, -Math.PI / 2.5, 0], name: 'projet8', url: '/projects/marble-game.png',
        info: {
            title: 'Marble Game',
            link: '',
            github: '',
            technos: 'ReactJS, ThreeJS, React Three Fiber, GSAP, Tailwindcss'
        }
    },
    // { position: [2 * x, 0, 2.75 * x], rotation: [0, -Math.PI / 2.5 , 0], name: 'projet9', bg: '#e4cdac', inside: () => <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" /> }
]


const Cards = (props) => {

    // const largeScreen = w > 7
    // const mediumScreen = w < 7 && w > 5
    // const smallScreen = w < 5

    // const scale = mediumScreen ? 1.3 : (smallScreen ? 2 : 1)
    // const position = largeScreen ? [0, 0, 0] : (mediumScreen ? [0, -1, 0] : [0, -2.5, 0])
    // const args = largeScreen ? [3,1,0.1] : (mediumScreen ? [1.5,.7,0.1] : [.9,.5,0.1])

    // const rocket = useGLTF('/icon-rocket.glb')


    return (
        <group  {...props}>
            {/* <fog attach="fog" args={['#191920', 0, 15]} /> */}
            <group position={[0, -0.5, 0]} >
                <Frames images={images} />
                {/* <group scale={scale} position={position}>
                    <RoundedBox args={args} position={[0, 3.4, 3.5]} material-color='white' />

                    <Text fontSize={.5 * w * .06} fontWeight={900} color={'black'} position={[0, 3.4, 3.58]} >PROJETS</Text>
                </group> */}
            </group>
        </group>
    )
}

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
    const ref = useRef()
    const clicked = useRef()
    const [, params] = useRoute('/item/:id')
    const [, setLocation] = useLocation()
    useEffect(() => {
        clicked.current = ref.current.getObjectByName(params?.id)
        if (clicked.current) {
            clicked.current.parent.updateWorldMatrix(true, true)
            clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.1))
            clicked.current.parent.getWorldQuaternion(q)
        } else {
            p.set(0, 0, 5.5)
            q.identity()
        }
    })
    useFrame((state, dt) => {
        easing.damp3(state.camera.position, p, 0.4, dt)
        easing.dampQ(state.camera.quaternion, q, 0.4, dt)
    })
    return (
        <group
            ref={ref}
            onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
            onPointerMissed={() => setLocation('/')}>

            {images.map((props) => <Frame key={props.name} {...props} /> /* prettier-ignore */)}
        </group>
    )
}

function Frame({ name, url, info, c = new THREE.Color(), ...props }) {
    const portal = useRef()
    const frame = useRef()
    const [, params] = useRoute('/item/:id')
    const [hovered, hover] = useState(false)
    const [rnd] = useState(() => Math.random())

    const isActive = params?.id === name
    useCursor(hovered)
    useFrame((state, dt) => {
        // portal.current.material.zoom =( 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 1) * .3
        easing.damp3(portal.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
        easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
    })

    const { title, link, github, technos } = info

    return (
        <group {...props}>
            <mesh
            castShadow
                name={name}
                onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
                scale={[1, GOLDENRATIO, 0.05]}
                position={[0, GOLDENRATIO / 2, 0]}
            // material={materials["Material.005"]}
            >

                <boxGeometry />
                <meshStandardMaterial color={'slategray'} metalness={0.5} roughness={0.5} envMapIntensity={2} />
                <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>

                <Image zoom={1} raycast={() => null} ref={portal} position={[0, 0, 0.7]} url={url} />

            </mesh>
            <group>
                <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.055}>

                        {title}

                </Text>
                <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.055}>
                    {github}
                </Text>
                <Text maxWidth={0.1} anchorX="left" anchorY={.4} position={[0.55, GOLDENRATIO, 0]} fontSize={0.055}>
                    {technos}
                </Text>
            </group>
          
        </group>
    )
}


export default Cards;
