import { Center, Hud, OrbitControls, PerspectiveCamera, Scroll, ScrollControls, Text3D, } from "@react-three/drei";
import Scene from "./Scene";
import { useThree } from "@react-three/fiber";
import EarthScene from "./earth/Earth";
import LivingRoom from "./LivingRoom";
import Minimap from "./Minimap";
import Cards from "./Cards";
import Header from "./Header";
import Lights from "./Lights";


export default function Experience(props) {

    const { height: h, width: w } = useThree(state => state.viewport)
    const scale = (w < 7 && w > 5) ? .8 : (w < 5 ? .6 : 1.2)

    return (

        <ScrollControls damping={.1} pages={2.5}{...props}>


            <Hud renderPriority={1}>
                <OrbitControls fov={45} autoRotate autoRotateSpeed={.5} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                <EarthScene />
            </Hud>

            <Hud renderPriority={2}>
                <PerspectiveCamera makeDefault position={[0, 0, 1]} />
                <Minimap />
            </Hud>

            <Header />

            <Hud renderPriority={3}>
                <PerspectiveCamera makeDefault fov={80} near={.1} far={80} position={[0, 0, 6]} />
                <Lights />
                <Scroll>
                    <Scene position={[0, 0, 0]} />
                    <Center bottom position={[0, -h * 1.17, 2]}>
                        <Text3D height={.05} letterSpacing={-0.05} size={.9} font='./Fira_Bold.json'>
                            Projets
                            <meshStandardMaterial roughness={0.5} metalness={1} color={'slategray'} />
                        </Text3D>
                    </Center>
                    <Cards position={[0, -h * 1.5, 0]} w={w} scale={scale} />
                    <LivingRoom position={[0, -h * 1.7, 0]} />
                </Scroll>
            </Hud>
        </ScrollControls>
    )
}