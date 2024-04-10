


export default function Lights() {



    return (
        <>
            <ambientLight intensity={4} />
            <directionalLight position={[0, 6, 10]} intensity={.5} />
            <directionalLight position={[-2.5, 5, 10]} intensity={.5} />
            <directionalLight position={[2.5, 5, 10]} intensity={.5} />
        </>
    )
}