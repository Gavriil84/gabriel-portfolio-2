import React from 'react'
import styled from 'styled-components';

const Manu = ({ open, setOpen }) => {
    return (
        <List open={open}>
            <li onClick={() => setOpen(!open)}><a href='/'>Home</a></li>
            <li onClick={() => setOpen(!open)}><a href='#about'>About Me</a></li>
            <li onClick={() => setOpen(!open)}><a href='#project'>Projects</a></li>
            <li onClick={() => setOpen(!open)}><a href='#experience'>Experience</a></li>
            <li onClick={() => setOpen(!open)}><a href='#contact'>Contact</a></li>
        </List>
    )
}

const List = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    color: #fff;
    align-items: center;
    padding: 0;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-right: 5.9vw;

    a{
        text-decoration: none;
        color: #fff;
    }

    li{
        padding: 18px 10px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        padding-top: 100px;
        flex-flow: column nowrap;
        justify-content: flex-start;
        background-color: #6F1C56;
        position: fixed;
        z-index: 100;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 70vh;
        width: 300px;
        /* padding-top: 3.5rem; */
        transition: transform 0.3s ease-in-out;
        margin: 0;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        li{
            color: #fff;
        }
    }
`

export default Manu