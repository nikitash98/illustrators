import { useLoader, useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import * as THREE from 'three';


import { LayerMaterial, Depth, Fresnel, Color } from 'lamina'

function Hand(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/hand_02.glb')
    const { actions } = useAnimations(animations, group)


    useEffect(()=> {
        if(actions) {
            actions?.Wave.play()
            actions?.WAVE2.play()
            actions?.WAVE5.play()
        }

    })

    return (


<group ref={group} {...props} dispose={null} position={[props.handHover? 13: 25, 0, -1 ]} rotation = {[0, -.3,0 ]}>
    <group name="Scene">
    <group name="Basiccharacter" position={[0, -13.583, 0]}>
        <primitive object={nodes.clavicle_r} />
        <group name="BasiccharacterHigh-poly" />
        <skinnedMesh name="BasiccharacterBody" geometry={nodes.BasiccharacterBody.geometry} material={materials['Basiccharacter:Body:Defaultskin']} skeleton={nodes.BasiccharacterBody.skeleton} />
    </group>
    <group name="Basiccharacter001" position={[0, -17.189, 0]}>
        <primitive object={nodes.clavicle_r_1} />
        <skinnedMesh name="BasiccharacterBody001" geometry={nodes.BasiccharacterBody001.geometry} material={materials['Basiccharacter:Body:Defaultskin']} skeleton={nodes.BasiccharacterBody001.skeleton} />
    </group>
    <group name="Basiccharacter002" position={[0, -10.969, 0]}>
        <primitive object={nodes.clavicle_r_2} />
        <skinnedMesh name="BasiccharacterBody002" geometry={nodes.BasiccharacterBody002.geometry}  skeleton={nodes.BasiccharacterBody002.skeleton} >
        <LayerMaterial
        color="#daa673" //
        lighting="physical"
        roughness={0.4}

      > 
      <Color color={"#daa673"}/>

        <Fresnel mode='add' color={"red"}/>

      </LayerMaterial>

            </skinnedMesh>
    </group>
    </group>
</group>

      )
}



/*
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
  */
  export default Hand
