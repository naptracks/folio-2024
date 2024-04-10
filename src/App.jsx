

import { Canvas } from '@react-three/fiber'
import { Stars, } from '@react-three/drei'
import Experience from './components/Experience'
import { Perf } from 'r3f-perf'
import ContactArea from './components/ContactArea'
import { Suspense } from 'react'
import Placeholder from './components/Placeholder'



function App() {

  const styles = {
    // Hide scrollbar for Chrome, Safari, and Opera
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE and Edge
    display: '-webkit-scrollbar' // Chrome, Safari, and Opera
  };

  return (

    <div className='flex justify-center'>

      <div className="main-container hide-scrollbar max-w-[1600px]">
        <div className="nav">
          <h1 className="label" />
          <div />
          <span className="caption" />
          <div />

          <ContactArea className='mt-[-4px] lg:mt-0' />

        </div>
        <div style={{ position: 'absolute', top: '60px', left: '2em', right: '2em', display: 'flex', justifyContent: 'space-between', height: '10px', }}>
          {
            ['+', '+', '+', '+'].map((_, i) => <p style={{ fontSize: '2.4rem', fontWeight: '300' }} key={i}>{_}</p>)
          }
        </div>
        <Canvas drp={[1, 1.5]} gl={{ antialias: false }} shadows className='hide-scrollbar' style={{ borderRadius: 20 }} >
          <color attach="background" args={['#191920']} />
          <Suspense fallback={
            < Placeholder />
          }
          >
            <Experience style={styles} />
            <Stars depth={100} speed={0} radius={100} saturation={1} />
          </Suspense>

        </ Canvas>
      </div>
    </div>
  )
}

export default App

