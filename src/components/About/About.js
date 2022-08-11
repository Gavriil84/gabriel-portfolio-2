import React from 'react'
import styled from 'styled-components'
import gab from '../../assets/pictures/gab.png'

const About = () => {
    return (
        <AboutContainer>
            <AboutTitle>
                <h2>01. About Me</h2>
                <div className="line"></div>
            </AboutTitle>

            <Image>
                <img src={gab} alt="Gabriel" />
            </Image>
            <Description>
                <p>Hello, My name is Gabriel and I enjoy creating web and mobile applications.
                    My interest in coding began back in 2019 through the experience of creating a
                    simple web page using HTML and CSS.
                    I was fascinated by the potential in coding and decided to learn more in-depth.
                    With the experience I've gained from participating in several projects, I am eager
                    to use all I've learned to solve problems and improve our lives. <br />
                    The followings are the technologies I've been working with recently.
                </p>
            </Description>
            <Skills>
                <div className="front">
                    <ul>
                        <li><span>&#9658;</span>JavaScript</li>
                        <li><span>&#9658;</span>React.js</li>
                        <li><span>&#9658;</span>React Native</li>
                        <li><span>&#9658;</span>Next.js</li>
                        <li><span>&#9658;</span>Github</li>
                        <li><span>&#9658;</span>Agile</li>
                    </ul>
                </div>
                <div className="back">
                    <ul>
                        <li><span>&#9658;</span>Node.js</li>
                        <li><span>&#9658;</span>Express.js</li>
                        <li><span>&#9658;</span>MongoDB</li>
                        <li><span>&#9658;</span>Mongoose</li>
                        <li><span>&#9658;</span>GraphQL</li>
                        <li><span>&#9658;</span>Java</li>
                        <li><span>&#9658;</span>Git</li>
                    </ul>
                </div>
            </Skills>
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    width: 100%;
    padding: 0 5.9vw;
    flex-direction: column;
`

const Image = styled.div`
    width: 250px;
    height: auto;
    padding: 0;
    margin: 0 auto;

    img{
        width: 100%;
        height: auto;
    }
`

const AboutTitle = styled.div`
    margin-top: 100px;
    margin-bottom: 35px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;

    .line{
        margin-left: 10px;
        width:50%; 
        height:1px; 
        background: #fff
    }

    h2{
        margin: 0;
        color: #fff;
        font-weight: 500;
        width: 140px;
    }
`

const Description = styled.div`
    width: 100%;

    p{
        color: #fff;
        font-weight: 300;
        letter-spacing: 0.5px;
        line-height: 2;
    }
`

const Skills = styled.div`
    width: 100%;
    margin-top: 40px;
    color: #fff;
    display: flex;
    flex-direction: row;
    gap: 50px;

    ul{
        margin: 0;
        padding: 0;

        li{
            list-style: none;
            font-weight: 300;
            display: flex;
            align-items: center;

            span{
                font-size: 10px;
                padding-right: 5px;
                color:#030F28;
            }
        }
    }

`

export default About