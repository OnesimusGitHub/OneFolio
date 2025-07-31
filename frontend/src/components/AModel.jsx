
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function AModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/trebble_ratchet_and_clank_npc.glb')
  const { actions } = useAnimations(animations, group)
  
 
  useEffect(() => {
    
    if (animations.length > 0) {
      Object.keys(actions).forEach(actionName => {
        if (actions[actionName]) {
          actions[actionName].reset().fadeIn(0.5).play()
          actions[actionName].setLoop(true, Infinity)
        }
      })
    }
    
    
    console.log('Available animations:', Object.keys(actions))
  }, [actions, animations])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 1, Math.PI, 6]} position={[0, -1, 0]}>
          <group
            name="b9f7c62143a14dd79ce10b1d4dd9eb43fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group name="Object_5" position={[-0.095, 57.045, 0.231]} />
                  <group name="Trebble_root_01" rotation={[-Math.PI / 2, -1.57, 0]}>
                    <primitive object={nodes.Trebble_hub1_02} />
                  </group>
                  <group name="Head_low001" position={[-0.095, 57.045, 0.231]} />
                  <group
                    name="Sphere001"
                    position={[0.094, 344.173, -12.075]}
                    rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_39" position={[31.387, -9.355, -3.559]}>
                      <mesh
                        name="Sphere001_Material_#51_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Sphere001_Material_#51_0'].geometry}
                        material={materials.Material_51}
                      />
                    </group>
                  </group>
                  <group
                    name="Sphere002"
                    position={[17.156, 36.358, -12.075]}
                    rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_42" position={[31.387, -9.355, -3.559]}>
                      <mesh
                        name="Sphere002_Material_#51_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Sphere002_Material_#51_0'].geometry}
                        material={materials.Material_51}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_6"
            geometry={nodes.Object_6.geometry}
            material={materials.Material_54}
            skeleton={nodes.Object_6.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/trebble_ratchet_and_clank_npc.glb')