

import logo from './logo.svg';
import './App.css';
import { Canvas,useFrame, useThree } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import { BoxGeometry, Vector3 } from 'three'
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
        near={1}
        far={10}
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


  const [sliderValue, setSliderValue] = useState(50); // Initial slider value
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };
  console.log(sliderValue)
  console.log(focalDist* 0.001)

  return (
    <div className="App">
      
    <div id="canvas-container">
      <Canvas 
      
      >

<color attach="background" args={["WHITE"]} />

      <EffectComposer >
      <Noise
          premultiply // enables or disables noise premultiplication
          blendFunction={BlendFunction.ADD} // blend mode 
          height={100}

        />
              <DepthOfField
          focusDistance={handHover ? 0.005 : focalDist * 0.00103}
          focalLength={0.001}
          bokehScale={50}
          height={600}
          blendFunction={BlendFunction.Screen}
          blur={false}
        />


        {/*
          <DepthOfField
          focusDistance={0.0}
          focalLength={10}
          bokehScale={10}
        />
        */}

      </EffectComposer>

      <CameraControls />
          <directionalLight color="white" position={[0, 2, 5]} intensity={1.5} />
          <ambientLight intensity={0.2}/>
          <Body setFocalDist = {setFocalDist}/>
            {/*

          <mesh position={[-20, 0, -30]}>
            <boxGeometry args={[2, 2]}/>
            <meshStandardMaterial color={"red"}/>
          </mesh>
          <mesh position={[-0, 0, -0]}>
            <boxGeometry args={[2, 2]}/>
            <meshStandardMaterial color={"red"}/>
          </mesh>


          <Hand handHover = {handHover} />
            */}

      </Canvas>
    </div>
    <TicketModal open = {open} setOpen = {setOpen}/>
    <div id = "canvas-overlay">
      {/*
      <div>
        ABC
        <div className='slider_container'>

        <input 
        type="range" 
        min="0.0" 
        max="0.01" 
        value={sliderValue} 
        onChange={handleSliderChange} 
        step="0.0005"
        className="slider-input"
      />

        </div>

      </div>
      */}

      <div id = "inner_shadow">

      </div>
      <div className='title_pieces' id = "sketch" style={{ filter: "blur(" + (1-percY) * 12 + "px)" }}>
        sketch
      </div>
      <div className='title_pieces' id = "night" style={{ filter: "blur(" + (1.2-percY) * 8 + "px)" }}>
        night
      </div>
      <div className='title_pieces' id = "at_the" style={{ filter: "blur(" + (percY) * 7 + "px)" }}>
        at the
      </div>
      <Event position = {[10, 10]} year = {"10.10.2023"} title = {"Costumed Sketch Night at the Society"} setFocalDist = {setFocalDist} setHandHover = {setHandHover} handHover = {handHover} setOpen = {setOpen} mousePosition = {mousePosition}/>
      <Event position = {[10, 70]} year = {"10.10.2023"} title = {"Sketch Night at the Society"} setFocalDist = {setFocalDist} setHandHover = {setHandHover} handHover = {handHover} setOpen = {setOpen} mousePosition = {mousePosition}/>
      <Event position = {[90, 10]} year = {"10.10.2023"} title = {"Costumed Sketch Night at the Society"} setFocalDist = {setFocalDist} setHandHover = {setHandHover} handHover = {handHover} setOpen = {setOpen} mousePosition = {mousePosition}/>
      <Event position = {[90, 70]} year = {"10.10.2023"} title = {"Costumed Sketch Night at the Society"} setFocalDist = {setFocalDist} setHandHover = {setHandHover} handHover = {handHover} setOpen = {setOpen} mousePosition = {mousePosition}/>

      <div className='title_pieces' id = "society" style={{ filter: "blur(" + percY * 12 + "px)" }}>
        society
      </div>
    </div>

    </div>

  );

}

export default App;



      {/*

      gl={{ powerPreference: "high-performance", alpha: true, antialias: false, stencil: false, depth: false, autoClear: true }}
      */}
