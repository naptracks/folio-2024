import { Center, Html, Text } from "@react-three/drei";
import { Astronaut } from "./earth/Earth";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";



export default function Placeholder(props) {

 

    return (
        <group {...props}>
            <Center >
                <Astronaut wireframe />
            </Center>

        </group>
    )

}