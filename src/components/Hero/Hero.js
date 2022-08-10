import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Earth from '../Earth/Earth'
import styled from 'styled-components'
import Landing from '../Landing/Landing'

const Hero = () => {
    return (
        <HeroContainer>
            <Landing />
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export default Hero