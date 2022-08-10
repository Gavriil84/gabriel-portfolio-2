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
            <ScrollMsg>
                <span >↓ Scroll Down for More ↓</span>
            </ScrollMsg>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const ScrollMsg = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    color: #fff;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    animation: bounce 0.8s infinite alternate; 

    @keyframes bounce { 
        0% { transform: translateY(0); } 
        100% { transform: translateY(-20px); } 
    }
    
`

export default Hero