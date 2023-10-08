
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel, Color } from 'lamina'

function Body(props) {
    const { nodes, materials } = useGLTF('/body.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.body.geometry} scale={0.9} position={[0, -5.5, 0]} rotation={[Math.PI / 2, 0, 0]} onPointerOver={()=> {props.setFocalDist(100)}} onPointerOut = {()=>{props.setFocalDist(1)}} >

        <LayerMaterial
        color="#FFC9AE" //
        lighting="standard"
        transmission={0}
      >
        <Depth near={1.0} far={10.0} colorA={'#ffffff'} colorB={'#000000'} alpha={1.0} mode={'screen'} mapping={"camera"}/>

        <Fresnel mode='screen'/>

      </LayerMaterial>

        </mesh>
      </group>
    )
}
  
export default Body