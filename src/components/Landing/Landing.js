import React from 'react'
import styled from 'styled-components'

const Landing = () => {
    return (
        <TopSectionContainer>

            <TextWrap>
                <TopText>
                    Hi, I am
                </TopText>
                <Name>
                    Gabriel Watanabe
                </Name>
                <Text>
                    A Full-stack Developer ready to dive into the tech world!
                </Text>
            </TextWrap>
        </TopSectionContainer>
    )
}

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #1756dd21;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    height: 100vh;
`

const TextWrap = styled.div`
    text-align: left;
    max-width: 290px;
`

const Name = styled.h1`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 35px;
    margin: 5px 0;
    color: #B23E59;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 1);
`

const TopText = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size:20px;
`

const Text = styled.p`
margin: 0;
    color: #fff;
`

export default Landing