import React from 'react'
import styled from 'styled-components'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'

const Contact = () => {
    return (
        <ContactContainer>

            <ContactTitle>
                <h2>04. Contact</h2>
                <div className="line"></div>
            </ContactTitle>

            <ContactInfo>
                <h3>Feel free to contact me 🚀 </h3>
                <div className="email">
                    <p>gabrielwt.canada@gmail.com</p>
                </div>

                <div className="sns">
                    <div className="github">
                        <a href="https://github.com/Gavriil84" target="_blank" rel="noreferrer">
                            <img src={github} alt="github" />
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/gabrielwatanabe/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </ContactInfo>


        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    width: 100%;
    padding: 0 5.9vw;
    flex-direction: column;
    `

const ContactTitle = styled.div`
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

const ContactInfo = styled.div`
    width: 100%;
    margin-top: 150px;

    h3{
        margin: 0;
        color: #fff;
        text-align: center;
        font-weight: 400;
    }

    .email{
        margin-top: 20px;

        p{
            font-weight: 600;
            margin: 0;
            color: #B23E59;
            font-size: 25px;
            text-align: center;
        }
    }

    .sns{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 100px;

        .github{
        display: flex;
        justify-content: center;
        background-color: #fff;
        align-self: center;
        border-radius: 8px;
        width: 81px;
        height: 81px;
        text-align: center;
        cursor: pointer;
        margin: 0;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 75px;
                height: 75px;
                margin: 0;
                padding: 0;
            }
        }
    }

        .linkedin{
        display: flex;
        justify-content: center;
        align-self: center;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        margin: 0;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 112px;
                height: 112px;
                margin: 0;
                padding: 0;
            }
        }
        }
    }
    `

export default Contact