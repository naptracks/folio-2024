import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useCursor, Image, Text, Html } from '@react-three/drei'
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
            link: 'https://digitalhippo-dun.vercel.app/',
            github: 'https://github.com/naptracks',
            technos: 'NextJS, NodeJS, Tailwindcss, PayloadCMS, tRPC, MongoDB'
        }
    },
    {
        position: [0.8 * x, 0, -0.6 * x], rotation: [0, 0, 0], name: 'projet3', url: '/projects/marc-bourreau.png',
        info: {
            title: 'Marc Bourreau',
            link: 'https://marc-bourreau.web.app/',
            github: 'https://github.com/naptracks',
            technos: 'ReactJS, NodeJS, Firebase'
        }
    },
    //left
    {
        position: [-1.75 * x, 0, 0.25 * x], rotation: [0, Math.PI / 2.5, 0], name: 'projet4', url: '/projects/superpowerpdf.png',
        info: {
            title: 'SupperPowerPDF',
            link: 'https://superpowerpdf.vercel.app/',
            github: 'https://github.com/naptracks/superpowerpdf',
            technos: 'NextJS, NodeJS, TS, Tailwindcss, OpenAI, Pinecone, tRPC, Prisma, ReactQuery'
        }
    },
    {
        position: [-2.15 * x, 0, 1.9 * x], rotation: [0, Math.PI / 2.5, 0], name: 'projet5', url: '/projects/le-comptoir-des-roses.png',
        info: {
            title: 'Le Comptoir des Roses',
            link: 'https://lecomptoirdesroses-frejus.com',
            github: 'https://github.com/naptracks',
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
            github: 'https://github.com/naptracks',
            technos: 'NextJS, NodeJS, Wordpress CMS, AWS'
        }
    },
    {
        position: [2.15 * x, 0, 1.9 * x], rotation: [0, -Math.PI / 2.5, 0], name: 'projet8', url: '/projects/marble-game.png',
        info: {
            title: 'Marble Game',
            link: 'https://marble-game-2024.web.app/',
            github: 'https://github.com/naptracks/marble-game',
            technos: 'ReactJS, ThreeJS, React Three Fiber, GSAP, Tailwindcss'
        }
    },
    // { position: [2 * x, 0, 2.75 * x], rotation: [0, -Math.PI / 2.5 , 0], name: 'projet9', bg: '#e4cdac', inside: () => <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" /> }
]


const Cards = (props) => {




    return (
        <group  {...props}>
            <group position={[0, -0.5, 0]} >
                <Frames images={images} />

            </group>
        </group>
    )
}

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
    const ref = useRef()
    const clicked = useRef()
    const [, params] = useRoute('/item/:id')
    const [, setLocation] = useLocation()
    const { width: w } = useThree(state => state.viewport)


    useEffect(() => {

        clicked.current = ref.current.getObjectByName(params?.id)
        if (clicked.current) {
            clicked.current.parent.updateWorldMatrix(true, true)
            clicked.current.parent.localToWorld(p.set(.2, GOLDENRATIO / 2, w > 7 ? 1.2 : 1.6))
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
    const ref = useRef()

    console.log(ref.current)


    const isActive = params?.id === name
    useCursor(hovered)
    useFrame((state, dt) => {
        // portal.current.material.zoom =( 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 1) * .3
        easing.damp3(portal.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
        // easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
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
                <meshStandardMaterial color={'#0e7490'} metalness={.8} roughness={0.4} envMapIntensity={2} />
                <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>

                <Image zoom={1} raycast={() => null} ref={portal} position={[0, 0, 0.7]} url={url} />

            </mesh>

            <mesh>
                    <Text onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                        onPointerOut={() => hover(false)} ref={ref} onClick={() => window.open(link, "_blank")} position={[0.55, GOLDENRATIO, 0]} maxWidth={.7} anchorX="left" anchorY="top" fontWeight="bold" color='white' toneMapped fontSize={0.065}>
                        {title}
                    </Text>

                <Text onClick={() => window.open(github, "_blank")} maxWidth={0.1}  color='white' anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.055}>
                    GitHub
                </Text>
                <Text maxWidth={0.1} color='white' anchorX="left" anchorY={.4} position={[0.55, GOLDENRATIO, 0]} fontSize={0.055}>
                    {technos}
                </Text>
            </mesh>

        </group>
    )
}


export default Cards;
