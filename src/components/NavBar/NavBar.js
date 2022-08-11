import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const NavBar = () => {
    return (
        <Nav>
            <div className="logo">
                <p>GW</p>
            </div>
            <Burger />
        </Nav>
    )
}

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    background-color: rgba(3,15,40,0.95);

    .logo{
        font-family: 'Bebas Neue', cursive, sans-serif;
        color: #fff;
        font-size: 35px;
        text-align: center;
        align-self: center;
        border-radius: 50%;
        margin-left: 5.9vw;

        p{
            padding: 0;
            margin: 2px 0 0 0;
        }
    }

    @media (min-width: 768px) {
        background-color: transparent;
    }


    
`

export default NavBar