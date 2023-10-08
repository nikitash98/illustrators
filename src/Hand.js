import { useLoader, useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useAnimations } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import * as THREE from 'three';
function Hand(props) {
    const gltf = useLoader(GLTFLoader, 'hand.glb')
    const group = useRef();

    const {actions} = useAnimations(gltf.animations, group)
    const mixer = new THREE.AnimationMixer(gltf.scene);
    useEffect(()=> {
        if(actions) {
            if(actions?.Anim01) {
                actions?.Anim01.play()
    
            }
    
        }
        if (gltf) {
            
            if (gltf.animations && gltf.animations.length) {
                gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
                });
            }
        }
    

    })
    useFrame(({ clock }) => mixer.current && mixer.current.update(clock.getDelta()))

    
    return <group scale={0.01} position={[props.handHover? 0: 8, 0, 0]} rotation={[-Math.PI/2, Math.PI, -Math.PI/4]} ref={group}>
            <primitive object={gltf.scene} />
        </group>
  }
  
  export default Hand