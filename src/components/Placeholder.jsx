import { Center, Html } from "@react-three/drei";
import { Astronaut } from "./earth/Earth";



export default function Placeholder(props) {

   

    return (
        <group {...props}>
            <Center>
                <Astronaut wireframe />
            </Center>
            <Center top>
                <Html position={[-.48, 1, 0]}>
                    <h1 className="text-white w-full"> Chargement...</h1>
                </Html>

            </Center>

        </group>
    )

}