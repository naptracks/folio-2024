

import { Center, Html, Line, OrthographicCamera, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { easing } from 'maath'

export default function Minimap(props) {
    const ref = useRef()
    const scroll = useScroll()
    const { width } = useThree((state) => state.viewport)

    const refStyles = ref.current?.childNodes[0]?.childNodes[0]?.style

    useFrame(() => {
        if (refStyles) {
            refStyles.top = `calc(calc(100% - 50px) * ${scroll.offset})`
        }
    })

    return (

        <group  {...props} position={[width / 17 , 0.1, 0]}>
            <Html ref={ref} style={{ position: 'relative' }} >

                <div style={{ position: 'absolute', right: 0, width: '7px', borderRadius: 20, background: 'slategray', height: `150px`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ position: 'absolute', top: `${scroll.offset}%`, width: '100%', height: '50px', background: 'white', borderRadius: 20 }}></div>
                </div>

            </Html>
        </group>
    )
}