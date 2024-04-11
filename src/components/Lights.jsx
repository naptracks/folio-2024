


export default function Lights() {



    return (
        <>
            <ambientLight  intensity={3} />
            <directionalLight color={"#6ad3ed"} position={[0, 6, 10]} intensity={1} />
            <directionalLight color={"#6ad3ed"} position={[-2.5, 5, 10]} intensity={2} />
            <directionalLight  position={[2.5, 5, 10]} intensity={.5} />
        </>
    )
}