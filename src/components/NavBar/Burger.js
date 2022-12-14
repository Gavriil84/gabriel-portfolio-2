import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from './Manu'

const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyleBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyleBurger>
            <Menu open={open} setOpen={setOpen} />
        </>
    )
}

const StyleBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 25px;
    right: 5.9vw;
    z-index: 120;
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}
`

export default Burger