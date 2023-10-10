
import { useLoader, extend } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel, Color } from 'lamina'


function Body(props) {
    const { nodes, materials } = useGLTF('body.glb')
    return (
      <>
      
      <group {...props} dispose={null}>\
        {/*\
        <mesh geometry={nodes.body.geometry} scale={0.9} position={[0, -5.5, 0]} rotation={[Math.PI / 2, 0, 0]}>

        */}
        <mesh geometry={nodes.body.geometry} scale={0.9} position={[0, -5.5, 0]} rotation={[Math.PI / 2, 0, 0]}
          onPointerMove={(e) => props.setFocalDist(e.distance)}

          onPointerOver={(e)=> {console.log(e); }} onPointerOut = {(e)=>{props.setFocalDist(100)}} >

        <LayerMaterial
        color="#edb885" //
        lighting="physical"
        roughness={0.4}

      > 
      <Color color={"#daa673"}/>

        <Fresnel mode='add' color={"red"}/>

      </LayerMaterial>

        </mesh>
      </group>

      </>

    )
}
  
export default Body



{/*\



          <mesh>
            <boxGeometry args = {[5, 5]}/>
            <meshBasicMaterial color={"#daa673"}/>
          </mesh>
        <Depth near={1.0} far={10.0} colorA={'#ffffff'} colorB={'#000000'} alpha={1.0} mode={'screen'} mapping={"camera"}/>

*/}