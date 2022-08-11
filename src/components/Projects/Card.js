import React from 'react'
import styled from 'styled-components'
import github from '../../assets/icons/github.png'

const Card = ({ title, gitLink, pageLink, description, image, tech }) => {
    return (
        <CardWrapper>
            <div className="icon">
                <a href={gitLink} target="_blank" rel="noreferrer">
                    <img src={github} alt="github icon" />
                </a>
            </div>

            <Title>
                <h2>
                    <a href={pageLink} target="_blank" rel="noreferrer">{title}</a>
                </h2>
            </Title>

            <Description>
                <p>
                    {description}
                </p>
            </Description>

            <Image>
                <img src={image} alt="project" />
            </Image>

            <TechStack>
                <p>{tech}</p>
            </TechStack>

        </CardWrapper>
    )
}

const CardWrapper = styled.div`
text-align: left;
    height: auto;
    max-width: 331px;
    max-height: 517px;
    background-color: #6f1c56;
    border-radius: 3px;
    position: relative;
    padding: 10px 20px;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media (min-width: 768px) {
        margin-top: 20px;
    }

    .icon{
        display: flex;
        justify-content: center;
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: #fff;
        align-self: center;
        border-radius: 8px;
        width: 26px;
        height: 26px;
        text-align: center;
        cursor: pointer;
        margin: 0;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 20px;
                height: 20px;
                margin: 0;
                padding: 0;
            }
        }
        
    }
`

const Title = styled.div`
    width: 100%;

    h2{
        margin: 0;
        margin-top: 5px;
        font-weight: 400;

        a{
            text-decoration: none;
            color: #fff;
            border-bottom: 3px solid #030F28;
        }
    }
`

const Image = styled.div`
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 20px;

    img{
        width: 100%;
        height: auto;
    }
`

const Description = styled.div`
    width: 100%;

    p{
        color: #fff;
        font-weight: 300;
        letter-spacing: 0.5px;
        line-height: 1.5;
    }
`

const TechStack = styled.div`
    width: 100%;

    p{
        font-weight: 300;
    }
`

export default Card