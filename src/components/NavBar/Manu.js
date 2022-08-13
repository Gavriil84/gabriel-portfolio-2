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
            <li className="resume" onClick={() => setOpen(!open)}><a href='https://drive.google.com/file/d/10bSng3dHt7906ivdT12lqCaIPMJdBrrM/view?usp=sharing' target="_blank" rel="noreferrer">Resume</a></li>
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

    .resume{
        background-color: #B23E59;
        margin-left: 10px;
        padding: 5px 10px;
        border-radius:3px;

        @media (max-width: 768px) {
            margin-top: 10px;
        }
        
        a{
            color: #030F28;
        }
    }

    @media (max-width: 768px) {
        padding-top: 100px;
        flex-flow: column nowrap;
        justify-content: flex-start;
        background: rgba(3,15,40,0.95);
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
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        li{
            color: #fff;
        }
    }
`

export default Manu