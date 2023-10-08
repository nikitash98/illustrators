import logo from './logo.svg';
import './App.css';
import { Canvas,useFrame, useThree } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import { Vector3 } from 'three'
import Body from './Body';
import Hand from './Hand';
import {
  EffectComposer,
  DepthOfField,
  Noise
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import useMousePosition from './MousePosition';
import React, { useRef, useState } from 'react';



import Event from './Event';
import TicketModal from './TicketModal';
const CameraControls = () => {
  const cameraRef = useRef();
  const controlsRef = useRef();
  const { camera, mouse } = useThree()
  const vec = new Vector3()
  let perc_cut = 0.5
  useFrame(() => {
    
    camera.position.lerp(vec.set(mouse.x * perc_cut, mouse.y * perc_cut, camera.position.z), 1)
    camera.lookAt(0, 0, 0)
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        position={[0, 0, 5]}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />
      <OrbitControls args={[cameraRef.current]} ref={controlsRef} enableZoom = {false} />
    </>
  );
};



function App() {
  const [focalDist, setFocalDist] = useState(1.0)
  const mousePosition = useMousePosition();
  const [handHover, setHandHover] = useState(false);

  const { innerWidth: width, innerHeight: height } = window;
  let percY = mousePosition.y/height
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
    <div id="canvas-container">
      <Canvas>

      <EffectComposer>
      <Noise
          premultiply // enables or disables noise premultiplication
          blendFunction={BlendFunction.ADD} // blend mode
        />
        <DepthOfField
          focusDistance={focalDist}
          focalLength={0.01}
          bokehScale={20}
          height={600}
          blendFunction={BlendFunction.Screen}
          blur={true}
        />

      </EffectComposer>
      <CameraControls />
          <directionalLight color="white" position={[0, 0, 5]} />
          <ambientLight intensity={0.5}/>
          <Body setFocalDist = {setFocalDist}/>

          <Hand handHover = {handHover}/>
      </Canvas>
    </div>
    {/*
    */}
    <TicketModal open = {open} setOpen = {setOpen}/>
    <div id = "canvas-overlay">
      <div className='title_pieces' id = "sketch" style={{ filter: "blur(" + (1-percY) * 12 + "px)" }}>
        sketch
      </div>
      <div className='title_pieces' id = "night" style={{ filter: "blur(" + (1.2-percY) * 8 + "px)" }}>
        night
      </div>
      <div className='title_pieces' id = "at_the" style={{ filter: "blur(" + (percY) * 7 + "px)" }}>
        at the
      </div>
      <Event title = {"Costumed Sketch Night at the Society"} setHandHover = {setHandHover} handHover = {handHover}/>

      <div className='title_pieces' id = "society" style={{ filter: "blur(" + percY * 12 + "px)" }}>
        society
      </div>
    </div>

    </div>

  );
}

export default App;
